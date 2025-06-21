'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; // Import useRouter

// Import SyntaxHighlighter and a theme
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Choose a style, e.g., darcula, atomOneDark, dracula

export default function UnrealCppPage() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Unreal Engine C++ Coding</h1>
        
        {/* Introduction/Overview for Unreal Engine C++ Coding */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section demonstrates my expertise in C++ programming within Unreal Engine. My focus is on developing high-performance, robust, and optimized gameplay features, core systems, and custom tools, leveraging the full power of C++ for complex and demanding game functionalities.
          </p>
        </div>

        {/* First C++ Code Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Code Example One: Custom Character Movement Component</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A detailed description of this C++ code example. Explain the problem it solves, the design patterns used, performance considerations, and how it integrates with Unreal Engine's framework.
          </p>
          <div className="w-full bg-gray-800 rounded-lg overflow-hidden relative mb-12"
               style={{ minHeight: '300px' }}>
            <SyntaxHighlighter language="cpp" style={darcula} customStyle={{ padding: '1rem', borderRadius: '0.5rem', margin: '0' }}>
{`// Example: A snippet from a custom character movement component
#include "CustomMovementComponent.h"
#include "GameFramework/Character.h"

UCustomMovementComponent::UCustomMovementComponent()
{
    // Set default values for this component's properties
    PrimaryComponentTick.bCanEverTick = true;
    WalkSpeed = 400.0f;
    SprintSpeed = 800.0f;
}

void UCustomMovementComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
    Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

    if (!CharacterOwner || !UpdatedComponent)
    {
        return;
    }

    // Example custom movement logic
    FVector CurrentInput = ConsumeInputVector();
    FVector DesiredMovement = CurrentInput * (bIsSprinting ? SprintSpeed : WalkSpeed) * DeltaTime;

    if (!DesiredMovement.IsNearlyZero())
    {
        FHitResult Hit;
        SafeMoveUpdatedComponent(DesiredMovement, 1.f - Hit.Time, Hit.Normal, Hit, true);
    }
}

void UCustomMovementComponent::SetSprinting(bool bNewSprinting)
{
    bIsSprinting = bNewSprinting;
}`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Second C++ Code Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Code Example Two: Interaction System Logic</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A description for your second C++ code example. Explain the core functionality, event handling, data structures used, and how it provides a flexible framework for in-game interactions.
          </p>
          <div className="w-full bg-gray-800 rounded-lg overflow-hidden relative mb-12"
               style={{ minHeight: '300px' }}>
            <SyntaxHighlighter language="cpp" style={darcula} customStyle={{ padding: '1rem', borderRadius: '0.5rem', margin: '0' }}>
{`// Example: Interaction interface and component logic
// IInteractable.h
UINTERFACE(MinimalAPI)
class UInteractable : public UInterface
{
    GENERATED_BODY()
};

class IInteractable
{
    GENERATED_BODY()

public:
    UFUNCTION(BlueprintNativeEvent, Category = "Interaction")
    void Interact(APawn* InstigatorPawn);
    virtual void Interact_Implementation(APawn* InstigatorPawn) {} // Default implementation
};

// PlayerCharacter.cpp (snippet)
void APlayerCharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
    Super::SetupPlayerInputComponent(PlayerInputComponent);
    PlayerInputComponent->BindAction("Interact", IE_Pressed, this, &APlayerCharacter::PerformInteraction);
}

void APlayerCharacter::PerformInteraction()
{
    FHitResult HitResult;
    FVector Start = GetPawnViewLocation();
    FVector End = Start + GetControlRotation().Vector() * InteractionDistance;

    FCollisionQueryParams Params;
    Params.AddIgnoredActor(this); // Don't interact with self

    if (GetWorld()->LineTraceSingleByChannel(HitResult, Start, End, ECC_Visibility, Params))
    {
        if (HitResult.GetActor()->Implements<UInteractable>())
        {
            IInteractable::Execute_Interact(HitResult.GetActor(), this);
            UE_LOG(LogTemp, Warning, TEXT("Interacted with: %s"), *HitResult.GetActor()->GetName());
        }
    }
}`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* General conclusion/additional content */}
        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            My C++ work in Unreal Engine focuses on creating scalable and performant solutions, from low-level systems to intricate gameplay mechanics, ensuring stability and efficiency in any project.
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
