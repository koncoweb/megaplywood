#!/usr/bin/env node

// Simple build test script
const { execSync } = require('child_process');

console.log('🧪 Testing build process...\n');

try {
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('\n🔨 Running build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('\n✅ Build successful! Ready for deployment.');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
