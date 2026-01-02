import 'package:flutter/material.dart';
import '../../core/shell.dart';

class DashboardAdmin extends StatelessWidget {
  const DashboardAdmin({super.key});

  @override
  Widget build(BuildContext context) {
    return const DashboardShell(role: UserRole.user);
  }
}
