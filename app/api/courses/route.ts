
import { NextResponse } from 'next/server';
import { db } from '@/firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { Course } from '@/lib/types';

export async function GET() {
  try {
    const coursesCol = collection(db, 'courses');
    const q = query(coursesCol, where('is_active', '==', true), orderBy('order_index'));
    const querySnapshot = await getDocs(q);

    const courses = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Course[];

    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
