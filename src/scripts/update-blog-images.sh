#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/blog

# Function to create a simple SVG with the specified color and icon
create_blog_svg() {
    local filename=$1
    local icon_path=$2
    local title=$3
    local bg_color="#06060A"
    local accent_color="#E10600"
    local highlight_color="#D9D9D9"
    
    cat > "public/images/blog/${filename}.svg" <<EOF
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background with dark color -->
  <rect width="1200" height="630" fill="${bg_color}" />
  
  <!-- Abstract grid lines -->
  <g stroke="${highlight_color}" stroke-opacity="0.05" stroke-width="1">
    <line x1="0" y1="100" x2="1200" y2="100" />
    <line x1="0" y1="200" x2="1200" y2="200" />
    <line x1="0" y1="300" x2="1200" y2="300" />
    <line x1="0" y1="400" x2="1200" y2="400" />
    <line x1="0" y1="500" x2="1200" y2="500" />
    
    <line x1="100" y1="0" x2="100" y2="630" />
    <line x1="300" y1="0" x2="300" y2="630" />
    <line x1="500" y1="0" x2="500" y2="630" />
    <line x1="700" y1="0" x2="700" y2="630" />
    <line x1="900" y1="0" x2="900" y2="630" />
    <line x1="1100" y1="0" x2="1100" y2="630" />
  </g>
  
  <!-- Background elements -->
  <circle cx="250" cy="450" r="180" fill="${accent_color}" fill-opacity="0.05" />
  <circle cx="950" cy="200" r="250" fill="${accent_color}" fill-opacity="0.07" />
  
  <!-- Icon in background -->
  <g transform="translate(900, 300) scale(8)" opacity="0.15">
    ${icon_path}
  </g>
  
  <!-- Title text -->
  <text x="100" y="150" font-family="SF Pro Display, system-ui, sans-serif" font-weight="bold" font-size="48" fill="${highlight_color}">
    ${title}
  </text>

  <!-- Subtitle text -->
  <text x="100" y="220" font-family="SF Pro Display, system-ui, sans-serif" font-size="32" fill="${highlight_color}" opacity="0.8">
    The Clone Empire
  </text>
  
  <!-- Main icon -->
  <g transform="translate(200, 380) scale(5)">
    ${icon_path}
  </g>
  
  <!-- Accent borders -->
  <line x1="100" y1="580" x2="1100" y2="580" stroke="${accent_color}" stroke-width="3" stroke-opacity="0.6" />
  <line x1="100" y1="250" x2="500" y2="250" stroke="${accent_color}" stroke-width="3" stroke-opacity="0.6" />
</svg>
EOF
    echo "Created ${filename}.svg"
    
    # Also create JPG version
    cp "public/images/blog/${filename}.svg" "public/images/blog/${filename}.jpg"
    echo "Created ${filename}.jpg"
}

# Create blog images with different relevant icons
create_blog_svg "featured-post-ai-revolution" '<path fill="#E10600" d="M12 16c2.69 0 5.77 1.28 6 2H6c.2-.71 3.3-2 6-2m0-2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4zm0-10C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/><path fill="#D9D9D9" d="M13 6h5v10h-5v-10zM6 6h5v10H6V6z"/>' "The Future is Agentic"

create_blog_svg "sales-clones-roi" '<path fill="#E10600" d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/><path fill="#D9D9D9" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>' "Maximizing ROI with Sales Agents"

create_blog_svg "ai-ethics-frontier" '<path fill="#E10600" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>' "The Ethics of AI Clones"

create_blog_svg "support-agent-tutorial" '<path fill="#E10600" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>' "Building Your First AI Support Agent"

create_blog_svg "ai-decision-making" '<path fill="#E10600" d="M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2z"/>' "AI Decision Making Process"

echo "Blog images have been created in public/images/blog directory" 