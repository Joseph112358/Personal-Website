---
date: "2025-05-17"
title: "My C++ game engines"
id: 4
---

I wanted to write a blog post about some of the various games / game engines I've been working on.
They're fun little sandboxes where I can try out ideas, and improve my coding abilities.

To summarise, the games are made in C++ using the SDL2 graphics library (relatively low level,
but not pure OpenGL)

Thus far, I have created two projects of sorts. SDL_game_V1 and SDL_game_V2 (creative I know). Each engine (that title is being generous) has its limitations, and each subsequent iteration is a mostly fresh clean slate, where I can begin again with the learnings and wisdom from the previous one. Enough lollygagging, lets have a look at each iteration

SDL_game_V1
The game was very basic. A much smaller window with more simplistic rendering and movement system

Limitations
* Player can only move by tile unit
* No animations really
* Basic collisions
* Maps can be variable size though


SDL_game_V2
From the first game, I wanted a bigger game window, and more fluid movement and animations. The player should be able
to 
Improvments I made
* Entities, such as spells, enemies, NPCS, and interactables (chest, door)
* Player can  move by smaller amouts (not just tile units), diagnol movement too
* Animations
* Collision detection
* More comprehensive user input (shoot, use, main menu)

Before I move onto V3 there are a few things I want to polish off
* All entities should have collision detection done
* Collisions (or other events) should trigger events (e.g. fireball collides, destroys itself, does damage)
* Basic Entity pathfinding
* Interact with chests and doors


Criteria for SDL_game_V3
* A real "camera" system. this way I can anchor it to the player if I so choose, or do loads of other cool things
* Handle multiple resolutions
* Zooming in and out