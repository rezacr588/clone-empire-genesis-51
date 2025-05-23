#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/team

# Function to create a simple SVG with the specified color and icon
create_team_svg() {
    local filename=$1
    local icon_path=$2
    local name=$3
    local role=$4
    local bg_color="#06060A"
    local accent_color="#E10600"
    local highlight_color="#D9D9D9"
    
    cat > "public/images/team/${filename}.svg" <<EOF
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <!-- Background with dark color -->
  <rect width="800" height="800" fill="${bg_color}" />
  
  <!-- Abstract grid lines -->
  <g stroke="${highlight_color}" stroke-opacity="0.05" stroke-width="1">
    <line x1="0" y1="100" x2="800" y2="100" />
    <line x1="0" y1="200" x2="800" y2="200" />
    <line x1="0" y1="300" x2="800" y2="300" />
    <line x1="0" y1="400" x2="800" y2="400" />
    <line x1="0" y1="500" x2="800" y2="500" />
    <line x1="0" y1="600" x2="800" y2="600" />
    <line x1="0" y1="700" x2="800" y2="700" />
    
    <line x1="100" y1="0" x2="100" y2="800" />
    <line x1="200" y1="0" x2="200" y2="800" />
    <line x1="300" y1="0" x2="300" y2="800" />
    <line x1="400" y1="0" x2="400" y2="800" />
    <line x1="500" y1="0" x2="500" y2="800" />
    <line x1="600" y1="0" x2="600" y2="800" />
    <line x1="700" y1="0" x2="700" y2="800" />
  </g>
  
  <!-- Circular background with gradient -->
  <circle cx="400" cy="300" r="150" fill="${accent_color}" fill-opacity="0.1" />
  
  <!-- Person icon -->
  <g transform="translate(400, 300) scale(8)">
    ${icon_path}
  </g>
  
  <!-- Name label -->
  <rect x="150" y="550" width="500" height="120" rx="10" fill="${accent_color}" fill-opacity="0.1" />
  
  <!-- Name text -->
  <text x="400" y="600" font-family="SF Pro Display, system-ui, sans-serif" font-weight="bold" font-size="36" fill="${highlight_color}" text-anchor="middle">
    ${name}
  </text>
  
  <!-- Role text -->
  <text x="400" y="640" font-family="SF Pro Display, system-ui, sans-serif" font-size="24" fill="${highlight_color}" opacity="0.8" text-anchor="middle">
    ${role}
  </text>
</svg>
EOF
    echo "Created ${filename}.svg"
    
    # Also create JPG version
    cp "public/images/team/${filename}.svg" "public/images/team/${filename}.jpg"
    echo "Created ${filename}.jpg"
}

# Create team images
create_team_svg "customer-success-manager" '<path fill="#E10600" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>' "Layla Chen" "Customer Success Manager"

create_team_svg "dr-eldrin-cortex" '<path fill="#E10600" d="M12 16c2.69 0 5.77 1.28 6 2H6c.2-.71 3.3-2 6-2m0-2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4zm0-10C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>' "Dr. Eldrin Cortex" "Chief AI Strategist"

echo "Team images have been created in public/images/team directory" 