import React, { useState, FormEvent } from 'react';
import styles from './DemoForm.module.css';

interface FormData {
  nombre: string;
  email: string;
  clinica: string;
  telefono: string;
  mensaje: string;
  website?: string; // Honeypot
}

interface DemoFormProps {
  onSuccess: () => void;
  onError: (message: string) => void;
}

export const DemoForm: React.FC<DemoFormProps> = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    clinica: '',
    telefono: '',
    mensaje: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'nombre':
        if (!value.trim() || value.trim().length < 2) {
          return 'El nombre debe tener al menos 2 caracteres';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
          return 'Por favor ingresa un email válido';
        }
        break;
      case 'clinica':
        if (!value.trim() || value.trim().length < 2) {
          return 'El nombre de la clínica es requerido';
        }
        break;
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    const nombreError = validateField('nombre', formData.nombre);
    if (nombreError) newErrors.nombre = nombreError;
    
    const emailError = validateField('email', formData.email);
    if (emailError) newErrors.email = emailError;
    
    const clinicaError = validateField('clinica', formData.clinica);
    if (clinicaError) newErrors.clinica = clinicaError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar honeypot (si tiene valor, es un bot)
    if (formData.website) {
      return;
    }

    if (!validateForm()) {
      onError('Por favor completa todos los campos requeridos');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          clinica: formData.clinica,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        onSuccess();
        // Resetear formulario
        setFormData({
          nombre: '',
          email: '',
          clinica: '',
          telefono: '',
          mensaje: '',
          website: '',
        });
        setErrors({});
      } else {
        const errorMessage = result.error || 'Error al enviar la solicitud';
        onError(errorMessage);
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      onError('Error de conexión. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Campo honeypot para detectar bots (oculto) */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className={styles.honeypot}
        aria-hidden="true"
      />

      <div className={styles.field}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={errors.nombre ? styles.inputError : styles.input}
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? 'nombre-error' : undefined}
        />
        {errors.nombre && (
          <span id="nombre-error" className={styles.errorMessage} role="alert">
            {errors.nombre}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <input
          type="email"
          name="email"
          placeholder="Email corporativo"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={errors.email ? styles.inputError : styles.input}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" className={styles.errorMessage} role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <input
          type="text"
          name="clinica"
          placeholder="Nombre de la clínica"
          value={formData.clinica}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={errors.clinica ? styles.inputError : styles.input}
          aria-invalid={!!errors.clinica}
          aria-describedby={errors.clinica ? 'clinica-error' : undefined}
        />
        {errors.clinica && (
          <span id="clinica-error" className={styles.errorMessage} role="alert">
            {errors.clinica}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono de contacto"
          value={formData.telefono}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <textarea
          name="mensaje"
          placeholder="Cuéntanos sobre tu clínica y necesidades específicas"
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Solicitar Demo'}
      </button>
    </form>
  );
};

