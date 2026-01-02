#!/usr/bin/env python3
"""
Script para optimizar y redimensionar imágenes PNG
Mantiene calidad mientras reduce tamaño de archivo
"""

import os
from pathlib import Path
from PIL import Image
import logging

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


def optimize_png(
    input_path: str,
    output_path: str,
    target_size: tuple[int, int],
    quality: int = 95,
    optimize: bool = True
) -> dict:
    """
    Optimiza y redimensiona una imagen PNG.
    
    Args:
        input_path: Ruta de la imagen original
        output_path: Ruta de salida
        target_size: Tamaño objetivo (width, height)
        quality: Calidad de compresión (1-100, solo para algunos formatos)
        optimize: Si True, optimiza el PNG
    
    Returns:
        dict: Estadísticas de compresión
    """
    try:
        # Abrir imagen original
        with Image.open(input_path) as img:
            original_size = img.size
            original_format = img.format
            
            # Convertir a RGBA si tiene transparencia, RGB si no
            if img.mode in ('RGBA', 'LA', 'P'):
                # Mantener transparencia
                img = img.convert('RGBA')
            else:
                img = img.convert('RGB')
            
            # Redimensionar con alta calidad (LANCZOS para mejor calidad)
            resized = img.resize(target_size, Image.Resampling.LANCZOS)
            
            # Obtener tamaño original del archivo
            original_file_size = os.path.getsize(input_path)
            
            # Guardar optimizado
            save_kwargs = {
                'format': 'PNG',
                'optimize': optimize,
            }
            
            # Para PNG, usar compress_level (0-9, 9 = máxima compresión)
            if optimize:
                save_kwargs['compress_level'] = 9
            
            resized.save(output_path, **save_kwargs)
            
            # Obtener tamaño del archivo optimizado
            optimized_file_size = os.path.getsize(output_path)
            
            # Calcular ahorro
            size_reduction = original_file_size - optimized_file_size
            size_reduction_percent = (size_reduction / original_file_size) * 100
            
            stats = {
                'original_size': original_size,
                'target_size': target_size,
                'original_file_size_kb': round(original_file_size / 1024, 2),
                'optimized_file_size_kb': round(optimized_file_size / 1024, 2),
                'size_reduction_kb': round(size_reduction / 1024, 2),
                'size_reduction_percent': round(size_reduction_percent, 2),
                'success': True
            }
            
            logger.info(
                f"Optimizado: {Path(input_path).name} "
                f"({original_size[0]}x{original_size[1]} -> {target_size[0]}x{target_size[1]})"
            )
            logger.info(
                f"   Tamaño: {stats['original_file_size_kb']} KB -> "
                f"{stats['optimized_file_size_kb']} KB "
                f"(-{stats['size_reduction_kb']} KB, -{stats['size_reduction_percent']}%)"
            )
            
            return stats
            
    except Exception as e:
        logger.error(f"Error procesando {input_path}: {e}")
        return {'success': False, 'error': str(e)}


def main():
    """Función principal del script."""
    # Directorio base
    script_dir = Path(__file__).parent
    assets_dir = script_dir / 'assets'
    
    if not assets_dir.exists():
        logger.error(f"Directorio assets no encontrado: {assets_dir}")
        return
    
    logger.info("Iniciando optimización de imágenes PNG...")
    logger.info(f"Directorio de assets: {assets_dir}")
    
    # Configuraciones de optimización
    optimizations = [
        {
            'input': 'logo-500x500.png',
            'output': 'logo-22x22.png',
            'size': (22, 22),
            'description': 'Logo para footer (22x22px)'
        },
        {
            'input': 'logo-500x500.png',
            'output': 'logo-200x200.png',
            'size': (200, 200),
            'description': 'Logo para hero/header (200x200px)'
        },
        {
            'input': 'AJLOGO.png',
            'output': 'AJLOGO-80x80.png',
            'size': (80, 80),
            'description': 'Logo para loader (80x80px)'
        }
    ]
    
    total_original_size = 0
    total_optimized_size = 0
    
    results = []
    
    for opt in optimizations:
        input_path = assets_dir / opt['input']
        output_path = assets_dir / opt['output']
        
        if not input_path.exists():
            logger.warning(f"Archivo no encontrado: {input_path}")
            continue
        
        logger.info(f"\nProcesando: {opt['description']}")
        logger.info(f"   Input: {input_path.name}")
        logger.info(f"   Output: {output_path.name}")
        logger.info(f"   Tamaño objetivo: {opt['size'][0]}x{opt['size'][1]}px")
        
        stats = optimize_png(
            str(input_path),
            str(output_path),
            opt['size'],
            quality=95,
            optimize=True
        )
        
        if stats.get('success'):
            total_original_size += stats['original_file_size_kb']
            total_optimized_size += stats['optimized_file_size_kb']
            results.append(stats)
    
    # Resumen final
    logger.info("\n" + "="*60)
    logger.info("RESUMEN DE OPTIMIZACION")
    logger.info("="*60)
    
    total_reduction = total_original_size - total_optimized_size
    total_reduction_percent = (total_reduction / total_original_size * 100) if total_original_size > 0 else 0
    
    logger.info(f"Archivos procesados: {len(results)}")
    logger.info(f"Tamaño original total: {total_original_size:.2f} KB")
    logger.info(f"Tamaño optimizado total: {total_optimized_size:.2f} KB")
    logger.info(f"Ahorro total: {total_reduction:.2f} KB ({total_reduction_percent:.1f}%)")
    
    if total_reduction > 0:
        logger.info(f"\nOptimización completada. Ahorro estimado: ~{int(total_reduction)} KB")
    else:
        logger.warning("\nNo se pudo optimizar ninguna imagen")
    
    logger.info("\nProceso finalizado")


if __name__ == '__main__':
    main()

