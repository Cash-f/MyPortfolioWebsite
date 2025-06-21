'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; // Import useRouter

// Import SyntaxHighlighter and a theme
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Choose a style, e.g., darcula, atomOneDark, dracula

export default function UnityCsharpPage() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Unity C# Coding</h1>
        
        {/* Introduction/Overview for Unity C# Coding */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section showcases my C# scripting abilities within Unity. I focus on developing efficient gameplay systems, interactive components, and robust game logic, demonstrating how C# can be used to build immersive and dynamic Unity projects.
          </p>
        </div>

        {/* First C# Code Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Code Example One: Player Controller Script</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A detailed description of this C# player controller script. Explain the movement logic, input handling, and how it ensures smooth and responsive player control within a Unity scene.
          </p>
          <div className="w-full bg-gray-800 rounded-lg overflow-hidden relative mb-12"
               style={{ minHeight: '300px' }}>
            <SyntaxHighlighter language="csharp" style={darcula} customStyle={{ padding: '1rem', borderRadius: '0.5rem', margin: '0' }}>
{`// Example: A basic player movement script in Unity
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float moveSpeed = 5.0f;
    public float rotationSpeed = 100.0f;

    void Update()
    {
        // Get horizontal and vertical input
        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");

        // Calculate movement direction
        Vector3 moveDirection = transform.forward * verticalInput;

        // Apply movement
        transform.position += moveDirection * moveSpeed * Time.deltaTime;

        // Apply rotation
        transform.Rotate(Vector3.up * horizontalInput * rotationSpeed * Time.deltaTime);

        // Example for jumping (if Rigidbody is attached)
        if (Input.GetButtonDown("Jump") && IsGrounded())
        {
            // GetComponent<Rigidbody>().AddForce(Vector3.up * 5f, ForceMode.Impulse);
        }
    }

    private bool IsGrounded()
    {
        // Simple ground check, adjust as needed
        return Physics.Raycast(transform.position, Vector3.down, 0.1f);
    }
}`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Second C# Code Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Code Example Two: Simple Inventory System Logic</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A description for your second C# code example. Explain the core functionality of the inventory system, how items are managed, and its extensibility for different item types.
          </p>
          <div className="w-full bg-gray-800 rounded-lg overflow-hidden relative mb-12"
               style={{ minHeight: '300px' }}>
            <SyntaxHighlighter language="csharp" style={darcula} customStyle={{ padding: '1rem', borderRadius: '0.5rem', margin: '0' }}>
{`// Example: A basic inventory system in Unity
using System.Collections.Generic;
using UnityEngine;

public class Inventory : MonoBehaviour
{
    public List<string> items = new List<string>();
    public int maxItems = 5;

    // Add an item to the inventory
    public bool AddItem(string itemName)
    {
        if (items.Count < maxItems)
        {
            items.Add(itemName);
            Debug.Log($"Added {itemName} to inventory. Current items: {items.Count}/{maxItems}");
            return true;
        }
        Debug.Log($"Inventory full! Cannot add {itemName}.");
        return false;
    }

    // Remove an item from the inventory
    public bool RemoveItem(string itemName)
    {
        if (items.Contains(itemName))
        {
            items.Remove(itemName);
            Debug.Log($"Removed {itemName} from inventory. Current items: {items.Count}/{maxItems}");
            return true;
        }
        Debug.Log($"{itemName} not found in inventory.");
        return false;
    }

    // Check if an item is in the inventory
    public bool HasItem(string itemName)
    {
        return items.Contains(itemName);
    }

    // List all items in the inventory (for debugging or UI display)
    public void ListItems()
    {
        if (items.Count == 0)
        {
            Debug.Log("Inventory is empty.");
            return;
        }
        Debug.Log("Inventory items:");
        foreach (string item in items)
        {
            Debug.Log($"- {item}");
        }
    }
}`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* General conclusion/additional content */}
        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            My C# scripting in Unity focuses on creating clean, modular, and efficient code that powers engaging gameplay experiences and robust game systems.
          </p>
        </div>

        {/* Return to Projects Button */}
        <div className="flex justify-center mt-12 mb-8">
          <button
            onClick={() => router.push('/projects')}
            className="bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 font-ovo text-lg"
          >
            Return to Projects
          </button>
        </div>
      
      </section>

      <Footer />
    </main>
  );
}
