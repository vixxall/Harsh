Battle Intro — Blender render instructions

This folder contains a Blender Python script `battle_intro.py` that sets up a cinematic 8–10 second battlefield intro. The script uses placeholder geometry; replace placeholders with high-quality models for AAA results.

Files:
- battle_intro.py — Blender Python script to build the scene and camera animation

Recommended workflow

1) Put high-quality models into `assets/models/` (create the folder):
   - warrior.glb or warrior.fbx (animated or T-pose)
   - elephant.glb
   - horse.glb
   - flag_texture.png (for banners)

2) Run Blender in background to build the scene and render (from project root):

```bash
# Render 10s at 24fps (240 frames)
blender --background --python assets/blender/battle_intro.py -- --frames 240 --fps 24 --output //render/battle_intro.mp4
```

3) To preview inside Blender (GUI):
- Open Blender, File → New → Text → Open `battle_intro.py`
- Run Script (Workspace will populate the scene)
- Tweak materials, replace placeholder meshes with your high-quality imports

4) Export settings recommended:
- Engine: Cycles
- Samples: 128–512 depending on GPU
- Denoise: enabled
- Resolution: 1920×1080 (or 3840×2160 for higher fidelity)
- Output: FFmpeg, H.264, High bitrate

5) Post-process and optimize for web (optional):
After render you can further compress and create a web-optimized mp4 or WebM. Example ffmpeg command to make a smaller loop-ready mp4:

```bash
# Re-encode to smaller web-friendly file
ffmpeg -i render/battle_intro.mp4 -c:v libx264 -crf 20 -preset slow -c:a copy dist/battle_intro_web.mp4

# Or create WebM
ffmpeg -i render/battle_intro.mp4 -c:v libvpx-vp9 -b:v 0 -crf 30 -threads 4 dist/battle_intro.webm
```

Notes & Tips
- The script is intentionally generic. For AAA quality replace placeholder meshes with detailed hero models and use Geometry Nodes or crowd simulation for thousands of warriors.
- For realistic cloth flags, use higher-res meshes and run cloth cache baking in Blender before final render.
- Use volumetric lighting and light portals (openings) for faster and cleaner noise results.
- If you want a perfectly seamless loop: render a 10s animation where the final frame matches the first (requires matching camera and lighting) or render a 5s forward + 5s reverse sequence and crossfade.

Need help replacing placeholders with your assets or tuning render settings? I can update the script to auto-import specific model filenames and place them in formations.