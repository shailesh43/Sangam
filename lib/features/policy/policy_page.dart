import 'package:flutter/material.dart';

class PolicyPage extends StatelessWidget {
  const PolicyPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: HelloWorld(),
        debugShowCheckedModeBanner: false
    );
  }
}

class HelloWorld extends StatefulWidget {
  const HelloWorld({super.key});

  @override
  State<HelloWorld> createState() => _HelloWorldState();
}

class _HelloWorldState extends State<HelloWorld> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(backgroundColor: Colors.white,
        elevation: 0,
        // leading: IconButton(
        //   icon: const Icon(Icons.arrow_back, color: Colors.black),
        //   onPressed: () => Navi? Navigator.pop(context),
        // ),
        title: const Text(
          'Policy',
          style: TextStyle(
            color: Colors.black,
            fontSize: 20,
            fontWeight: FontWeight.w600,
            fontFamily: 'Inter',
          ),
        ),),
      backgroundColor: Colors.white,
      body: const Center(
        child: Text(
          'Policy Page',
          style: TextStyle(fontSize: 24),
        ),
      ),

    );
  }
}
