#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/ai

# Function to create a simple SVG with the specified color and icon
create_ai_svg() {
    local filename=$1
    local icon_path=$2
    local bg_color="#06060A"
    local accent_color="#E10600"
    local highlight_color="#D9D9D9"
    
    cat > "public/images/ai/${filename}.svg" <<EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background with dark color -->
  <rect width="800" height="600" fill="${bg_color}" />
  
  <!-- Abstract grid lines -->
  <g stroke="${highlight_color}" stroke-opacity="0.05" stroke-width="1">
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
  
  <!-- Glowing circles -->
  <circle cx="150" cy="450" r="80" fill="${accent_color}" fill-opacity="0.05" />
  <circle cx="650" cy="150" r="100" fill="${accent_color}" fill-opacity="0.07" />
  
  <!-- Central icon -->
  <g transform="translate(400, 300) scale(7)">
    ${icon_path}
  </g>
  
  <!-- Accent lines -->
  <line x1="100" y1="550" x2="700" y2="550" stroke="${accent_color}" stroke-width="2" stroke-opacity="0.5" />
  <line x1="400" y1="50" x2="400" y2="550" stroke="${accent_color}" stroke-width="2" stroke-opacity="0.5" />
</svg>
EOF
    echo "Created ${filename}.svg"
}

# Create SVGs with different relevant icons
create_ai_svg "cognitive-agent" '<path fill="#E10600" d="M12 16c2.69 0 5.77 1.28 6 2H6c.2-.71 3.3-2 6-2m0-2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4zm0-10C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/><path fill="#D9D9D9" d="M13 6h5v10h-5v-10zM6 6h5v10H6V6z"/>'

create_ai_svg "executive-assistant" '<path fill="#E10600" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>'

create_ai_svg "support-agent" '<path fill="#E10600" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>'

create_ai_svg "sales-agent" '<path fill="#E10600" d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/><path fill="#D9D9D9" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>'

create_ai_svg "autonomous-decision" '<path fill="#E10600" d="M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2z"/>'

create_ai_svg "agentic-workflow" '<path fill="#E10600" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path fill="#D9D9D9" d="M19 3l-4 4H5v10h10l4 4V3z"/>'

create_ai_svg "realtime-learning" '<path fill="#E10600" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>'

create_ai_svg "enterprise-security" '<path fill="#E10600" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>'

create_ai_svg "healthcare-agent" '<path fill="#E10600" d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>'

create_ai_svg "realestate-agent" '<path fill="#E10600" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>'

create_ai_svg "ecommerce-agent" '<path fill="#E10600" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>'

create_ai_svg "finance-agent" '<path fill="#E10600" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>'

create_ai_svg "custom-solution" '<path fill="#E10600" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/><path fill="#D9D9D9" d="M2.5 18v-1.5h9V18h-9zm10.5-6h1.5v9h-1.5v-9z"/>'

create_ai_svg "client-testimonial" '<path fill="#E10600" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>'

# Copy SVG to JPG versions for compatibility
for file in public/images/ai/*.svg; do
  base=$(basename "$file" .svg)
  cp "$file" "public/images/ai/${base}.jpg"
done

echo "AI images have been created in public/images/ai directory" 