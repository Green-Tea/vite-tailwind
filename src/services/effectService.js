import { db } from '@/js/firebase';
import { doc, getDoc } from 'firebase/firestore';

async function getEffectById(id) {
    try {
        const effectDoc = doc(db, "Effects", id);
        const effectSnapshot = await getDoc(effectDoc);

        if (effectSnapshot.exists()) {
            return {
                id: effectSnapshot.id,
                ...effectSnapshot.data(),
            };
        } else {
            console.error('No such effect!');
            return null;
        }
    } catch (error) {
        console.error('Error fetching effect by ID:', error);
        throw error;
    }
};

export default {
    getEffectById
}
