# Danceholic

 Danceholic is a website where users can learn how to dance with Machine Learning

## Live Project
[https://d3a9652u6cce93.cloudfront.net/](https://d3a9652u6cce93.cloudfront.net/)
## Installation
Fork or Clone the project, then install dependencies and start the dev server:

```bash
npm install --legacy-peer-deps
npm start
```

> The `--legacy-peer-deps` flag is required because `@ronchalant/react-loading-overlay` declares a React 17 peer dependency while this project runs on React 18. A `.npmrc` is committed so `npm install` works without the flag in most environments.

## Production build

```bash
npm run build
```

The optimized bundle is written to `build/` and can be served by any static host.

## Deployment (Vercel)

The repository ships with a `vercel.json` that configures the install/build commands for the React 18 + legacy peer-deps setup, so the project deploys to Vercel out of the box:

1. Import the repo on [vercel.com](https://vercel.com/new) — Vercel auto-detects the Create React App preset.
2. No environment variables are required.
3. Click **Deploy**. Vercel runs `npm install --legacy-peer-deps` and `CI=false react-scripts build`, then serves the `build/` directory.

`CI=false` is set in the build command because Create React App promotes ESLint warnings to errors when `CI=true` (Vercel's default). This keeps the build green while the codebase is gradually cleaned up.

## Features
1. Clean, minimalistic UI to reduce user's activation energy to start learning
2. Real time Body tracking along with a follow along video
3. Real time score to tell the user how the user is performing
4. A graph of how the user performed after completing each level
5. A download button for the user to download their dance after each level

## Working
![Danceholic working](https://github.com/user-attachments/assets/8df34bce-d86d-44db-b274-504e55cbb89b)

### Calculation of the score
Movenet model detects 17 keypoints of the body such as nose, left elbow, right knee, etc.

For calculating the score, I have used the method of gradients (calculating the slope of the segments connecting the keypoints. ) because the gradient of the user will remain same for all video conditions, therefore the placement of the camera need not be considered.

The gradients in the dance video are pre-calculated and are compared to the gradients of the user in real time. 

## Demonstration
![image](https://github.com/user-attachments/assets/549c3311-6df6-42fe-8e23-9d02eadf0cf9)

![image](https://github.com/user-attachments/assets/8d1afb3d-5583-4f0c-a426-9301cace9e23)

![image](https://github.com/user-attachments/assets/ee977f06-4598-4adc-b617-2c9af64c46c9)

![image](https://github.com/user-attachments/assets/8702d505-ff53-4457-948b-f99f6ee55673)

![image](https://github.com/user-attachments/assets/fa1f0034-9b90-4e1d-a3fb-853a97834035)


## Technologies used
1. React
2. TensorFlow

