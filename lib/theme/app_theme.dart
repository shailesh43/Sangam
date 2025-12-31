import 'package:flutter/material.dart';
import 'app_colors.dart';
import 'app_text_theme.dart';

class AppTheme {
  static ThemeData lightTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.light,

    // Colors
    colorScheme: ColorScheme.light(
      primary: AppColors.primary,
      surface: AppColors.surface,
      onPrimary: Colors.white,
      onSurface: AppColors.textPrimary,
    ),

    scaffoldBackgroundColor: AppColors.background,
    dividerColor: AppColors.divider,

    // Typography
    textTheme: AppTextTheme.lightTextTheme,

    // Components
    appBarTheme: const AppBarTheme(
      backgroundColor: AppColors.background,
      foregroundColor: AppColors.textPrimary,
      elevation: 0,
    ),

    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
      ),
    ),
  );
}
