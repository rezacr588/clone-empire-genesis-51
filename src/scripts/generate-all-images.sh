#!/bin/bash

echo "========== GENERATING ALL IMAGES =========="
echo ""

echo "1. Creating placeholder image..."
./create-placeholder.sh

echo ""
echo "2. Generating AI agent images..."
./download-ai-images.sh

echo ""
echo "3. Generating blog images..."
./update-blog-images.sh

echo ""
echo "4. Generating team images..."
./update-team-images.sh

echo ""
echo "========== IMAGE GENERATION COMPLETE =========="
echo "All images have been successfully created." 