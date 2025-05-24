# NEXTbased Pizza Dashboard
A dashboard project built using **Next.js**, **Tailwind CSS**, and **NextAuth.js** for Google OAuth authentication.

## Author
**Sumeet Sahu**

## Live Application
[https://nex-tbased-pizza-dashboard-1q5k.vercel.app](https://nex-tbased-pizza-dashboard-1q5k.vercel.app)

## Local Setup Instructions
1. **Clone the repository**  
``bash`
git clone https://github.com/yourusername/project-repo-name.git
cd project-repo-name
2. **Install dependencies** :- npm install
    
3. **Set up environment variables**
Create a .env.local file at the root of your project with the following content:
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-key
You can generate NEXTAUTH_SECRET using: https://randomkeygen.com

4. **Run development server**
   npm run dev
5. **Visit the app**
   http://localhost:3000

## Asumptions and challenges
Used NextAuth.js to simplify Google OAuth integration.
Faced and resolved a redirect URI mismatch error during Vercel deployment.
Ensured .env.local is safely ignored via .gitignore.


## Third-Party Libraries Used
Next.js
Tailwind CSS
NextAuth.js
