#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images

# Create a placeholder SVG
cat > "public/images/placeholder.svg" <<EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background with dark color -->
  <rect width="800" height="600" fill="#06060A" />
  
  <!-- Grid lines -->
  <g stroke="#D9D9D9" stroke-opacity="0.05" stroke-width="1">
    <line x1="0" y1="100" x2="800" y2="100" />
    <line x1="0" y1="200" x2="800" y2="200" />
    <line x1="0" y1="300" x2="800" y2="300" />
    <line x1="0" y1="400" x2="800" y2="400" />
    <line x1="0" y1="500" x2="800" y2="500" />
    
    <line x1="100" y1="0" x2="100" y2="600" />
    <line x1="200" y1="0" x2="200" y2="600" />
    <line x1="300" y1="0" x2="300" y2="600" />
    <line x1="400" y1="0" x2="400" y2="600" />
    <line x1="500" y1="0" x2="500" y2="600" />
    <line x1="600" y1="0" x2="600" y2="600" />
    <line x1="700" y1="0" x2="700" y2="600" />
  </g>
  
  <!-- Clone Empire logo placeholder -->
  <rect x="250" y="200" width="300" height="200" fill="#E10600" fill-opacity="0.1" stroke="#E10600" stroke-width="2" rx="20" />
  
  <!-- Text -->
  <text x="400" y="300" font-family="SF Pro Display, system-ui, sans-serif" font-weight="bold" font-size="36" fill="#D9D9D9" text-anchor="middle">
    The Clone Empire
  </text>
  <text x="400" y="340" font-family="SF Pro Display, system-ui, sans-serif" font-size="24" fill="#D9D9D9" opacity="0.8" text-anchor="middle">
    Image Coming Soon
  </text>
</svg>
EOF

# Also create JPG version
cp "public/images/placeholder.svg" "public/images/placeholder.jpg"

echo "Placeholder image has been created at public/images/placeholder.svg and public/images/placeholder.jpg" 