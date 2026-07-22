const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const firebaseEnabled = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId)

async function loadModules() {
  const [{ initializeApp }, firestore] = await Promise.all([import('firebase/app'), import('firebase/firestore')])
  const app = initializeApp(firebaseConfig)
  const db = firestore.getFirestore(app)
  return {
    db,
    doc: firestore.doc,
    increment: firestore.increment,
    onSnapshot: firestore.onSnapshot,
    setDoc: firestore.setDoc,
  }
}

type FirestoreBundle = Awaited<ReturnType<typeof loadModules>>
let modulesPromise: Promise<FirestoreBundle> | null = null

// Firebase's SDK is ~500kB — only pulled into a chunk when a post is actually opened, not on initial page load.
export function loadFirestore(): Promise<FirestoreBundle | null> {
  if (!firebaseEnabled) return Promise.resolve(null)
  if (!modulesPromise) modulesPromise = loadModules()
  return modulesPromise
}
