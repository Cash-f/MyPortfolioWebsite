'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function UnrealBlueprintsPage() {
  const router = useRouter();

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center text-4xl sm:text-5xl">
          Unreal Engine Blueprint Coding
        </h1>

        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section showcases my proficiency in Unreal Engine&apos;s Blueprint visual scripting. I focus on creating robust, scalable, and intuitive gameplay systems, interactive mechanics, and UI/UX flows, demonstrating how visual scripting can power complex game features efficiently.
          </p>
        </div>

        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center text-2xl sm:text-3xl">
            Zombie Wave System & Logic
          </h2>
          <p className="text-lg text-center text-gray-300 font-ovo mb-2">
            This system orchestrates the progressive emergence of enemies, escalating the challenge as players advance through waves.
            At its core, the centralized Wave Manager Blueprint serves as the brain.
          </p>

          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={`zombie-blueprint-${i}`}
              className="w-full relative overflow-hidden rounded-lg mb-12"
              style={{ paddingBottom: '56.25%' }}
            >
              <Image
                src={`/BlueprintCodeSnippets/AiSpawnerLogic${i}.png`}
                alt={`Zombie Spawner Blueprint Logic ${i}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

        <h1 className="text-5xl font-ovo mb-12 text-center text-4xl sm:text-5xl">
          Code Analysis
        </h1>
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            This Blueprint system manages dynamic zombie waves, progressively escalating difficulty and providing clear gameplay feedback.
            It effectively leverages data tables for configurable wave parameters and a robust event-driven architecture for precise spawning and tracking.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            Upon a New Wave event, the system increments the current Wave Number, plays a corresponding sound, and initiates the wave by calling a dedicated Start Wave function within the Game Mode, passing the updated wave number and the newly calculated Zombie Remaining count.
            The Start Wave function is responsible for retrieving specific wave configuration data directly from a designated Data Table, using the current Wave Number as the lookup key. From this data, it determines the initial Zombie Remaining count for the wave, establishing the total number of zombies to be spawned.
            This process integrates wave-specific spawn parameters, ensuring a controlled increase in difficulty with each subsequent wave.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            It also updates internal variables that track the overall zombie count and manage the pool of unique zombie types available for spawning within that wave.
            The core spawning loop is then activated by a Call On New Wave function.
            This function uses the Zombie Remaining count to drive an iterative process, ensuring the correct number of zombies is spawned.
            Within this loop, it executes a function to select a zombie type from the active pool, then calls another function responsible for the actual spawning process, which typically involves selecting a random, designated spawn point.
            The Add Zombie To Spawner function meticulously manages the pool of zombie types available for spawning.
            It accesses a collection of active zombie types, randomly selects one, and strictly enforces that the selected type does not exceed any predefined maximum spawn count for that type within the current wave.
            Upon selection, it increments the count for that specific zombie type within the active pool and proceeds to instantiate the zombie actor.
            Conversely, it also contains the logic to decrement this count once a zombie of that type has been spawned, ensuring accurate pool management and promoting diversity across the wave.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            Crucially, the On Zombie Defeated event serves as the primary feedback mechanism.
            When a zombie is eliminated, this event is triggered, accurately decrementing the Zombie Remaining count.
            A precise conditional check then verifies if all zombies for the current wave have been defeated (i.e., Zombie Remaining is zero and all unique zombie types have been cleared from their active pool). If both conditions are met, a Timer Transition is initiated.
            This introduces a controlled pause before the New Wave event is automatically invoked again, seamlessly advancing the game to the next progressive challenge.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            A utility function is also present that calculates the total number of zombies currently accounted for in the spawning pool by summing the individual counts of different zombie types.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            In essence, this Blueprint system exemplifies a robust and well-structured approach to wave-based enemy spawning.
            It demonstrates a clear command of data tables for dynamic configurability, an efficient event-driven architecture for seamless inter-Blueprint communication, and precise logical flow control for creating engaging and scalable gameplay experiences.
          </p>
        </div>

        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 mt-8 text-center text-2xl sm:text-3xl">
            Modular Weapon System
          </h2>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            This Blueprint-driven weapon system provides a robust and dynamic foundation for first-person shooter mechanics, encompassing firing, ammunition management, recoil simulation, and aiming transitions.
          </p>

          {[
            'WeaponfiringlogicHigherRes2',
            'ReducingAmmo',
            'Reloadinglogic',
            'proceduralrecoil',
            'controllerrecoil',
            'AimingTimeline',
            'Aiminginterp',
          ].map((fileName) => (
            <div
              key={`weapon-blueprint-${fileName}`}
              className="w-full relative overflow-hidden rounded-lg mb-12"
              style={{ paddingBottom: '56.25%' }}
            >
              <Image
                src={`/BlueprintCodeSnippets/${fileName}.png`}
                alt={`Weapon System Blueprint Logic ${fileName}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

        <h1 className="text-5xl font-ovo mb-12 text-center text-4xl sm:text-5xl">
          Code Analysis
        </h1>
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            This Blueprint system manages dynamic zombie waves, progressively escalating difficulty and providing clear gameplay feedback.
            It effectively leverages data tables for configurable wave parameters and a robust event-driven architecture for precise spawning and tracking.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            The primary firing mechanism is initiated by player input. It first validates if the weapon can fire, checking against a fire rate timer to prevent spamming and ensuring sufficient current magazine ammunition.
            If conditions are met, the system executes a line trace (or similar hit detection) from the weapon&apos;s muzzle to simulate projectile travel, handling hit registration and applying damage.
            Simultaneously, it triggers visual feedback such as muzzle flash particle effects, projectile spawns (if applicable), and firing sound cues. Crucially, upon successful fire, the system calls a function to reduce ammunition from the current magazine.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            Ammunition tracking is meticulously handled. Upon each successful shot, a dedicated Reduce Bullets function is invoked.
            This function retrieves the current weapon&apos;s data from the player&apos;s Inventory array, specifically targeting the currently selected weapon. It then decrements the Current Ammo in Clip for that weapon.
            The updated ammunition data is then dynamically re-constructed and set back into the inventory array, ensuring all ammunition counts are accurately maintained and persist throughout gameplay.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            The reloading process is triggered by player input and incorporates critical checks. It first verifies if a reload is necessary and if total reserve ammunition is available.
            If these conditions are met, the system initiates a reloading sound and begins a reloading timer.
            Upon completion of the reload, the Current Ammo in Clip is refilled up to its maximum capacity, with the corresponding amount being deducted from the total reserve ammunition. This ensures accurate ammo economy.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            Procedural Recoil: Upon firing, the system calculates and applies a procedural offset to the weapon mesh&apos;s location and rotation.
            This involves manipulating Recoil Location and Recoil Rotation variables, often interpolating these values over time to create a smooth kickback and recovery effect. This gives weapons a distinct and dynamic feel.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            Controller Recoil: Concurrently, the system influences the player&apos;s controller input, primarily adjusting the control Pitch and Yaw.
            This simulates the camera&apos;s upward and sideways jump due to recoil, forcing the player to compensate for sustained fire. This layered approach creates a more immersive and challenging shooting experience.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            For aiming down sights (ADS), the system utilizes a Timeline to achieve smooth visual transitions. When the player initiates aiming, the Timeline is played, which interpolates the weapon mesh&apos;s transform (location and rotation) to an ADS position.
            Simultaneously, it can smoothly adjust camera field of view (FOV) or camera lag settings.
            Releasing the aim input reverses the Timeline, smoothly returning the weapon and camera to the hip-fire state. This provides a fluid and responsive aiming experience, enhancing player precision and immersion.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            To conclude, This robust Blueprint weapon system delivers a dynamic and immersive first-person shooter experience by seamlessly integrating responsive firing mechanics,
            comprehensive ammunition management (including precise reloads), layered procedural and controller recoil for realistic kickback, and smooth aiming interpolation via timelines for a polished ADS transition.
          </p>
        </div>

        {/* Interactive Door System */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 mt-8 text-center text-2xl sm:text-3xl">
            Interactive Door System
          </h2>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            This Blueprint-driven door system provides a robust and dynamic foundation for interactive gameplay mechanics, encompassing door opening/closing, locking mechanisms, and player interactions.
          </p>

          {[
            'InteractiveDoorLogic',
            'InteractiveDoorHUDLogic',
          ].map((fileName) => (
            <div
              key={`door-blueprint-${fileName}`}
              className="w-full relative overflow-hidden rounded-lg mb-12"
              style={{ paddingBottom: '56.25%' }}
            >
              <Image
                src={`/BlueprintCodeSnippets/${fileName}.png`}
                alt={`Interactive Door Blueprint Logic ${fileName}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

        <h1 className="text-5xl font-ovo mb-12 text-center text-4xl sm:text-5xl">
          Code Analysis
        </h1>
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            The core door logic is housed within an Actor Blueprint representing the door itself. It listens for an Interact event, triggered by the player, which acts as the primary input for interaction.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            Upon receiving an Interact event, the system first determines the door&apos;s current state. This is crucial for controlling its behavior.
            If the door is Closed, it initiates an opening sequence. This involves playing an animation (e.g., using a Timeline for smooth movement of a Static Mesh Component) and playing an associated opening sound effect.
            After the opening sequence, the door&apos;s state is updated to Open.
            Conversely, if the door is Open, the system initiates a closing sequence, playing a closing animation/movement and sound effect. Following this, the door&apos;s state is updated to Closed.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            Additionally, the door incorporates a collision component, a Box Collision, that triggers an Overlap event when the player enters its proximity.
            This overlap event can be used to enable or disable interaction prompts, ensuring the player only sees interaction cues when relevant.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            A notable feature is the conditional locking mechanism. There is a check (OR gate) that determines if the door is locked or if certain conditions need to be met (having a specific key or completing a task) before it can be opened.
            If the door is locked and the conditions are not met, the logic prevents interaction.
          </p>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            The HUD (Heads-Up Display) component is a Widget Blueprint responsible for providing visual cues to the player regarding door interaction.
            When the player&apos;s character enters the interaction range of a door (via the door&apos;s overlap event), the HUD receives a notification.
            This triggers the display of an interactive prompt (e.g., &quot;Press [E] to Open/Close&quot;). This is achieved by setting the visibility of a UI element within the Widget Blueprint.
            When the player exits the interaction range, the HUD receives another notification, which then hides the interactive prompt, ensuring a clean and uncluttered UI.
          </p>
        </div>


        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            Explore how I leverage Blueprints to create intricate and efficient gameplay mechanics, bringing ideas to life directly within Unreal Engine.
          </p>
        </div>

        <motion.div
          className="flex justify-center mt-10 sm:mt-12 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mt-12">
            <a
              href="/projects"
              className="text-white px-8 py-3 rounded-full bg-black border border-white transition duration-300 ease-in-out font-ovo text-lg shadow-lg"
            >
              View My Projects
            </a>
          </div>
        </motion.div>

      </section>

      <Footer />
    </main>
  );
}