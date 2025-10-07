// import sevenpm from '@/public/sevenpm.jpeg'
import Image from 'next/image'

export default function Logo() {
    return (
        <>
        <Image
        src = '/sevenpm.jpeg'
           alt = ''
           width= {752} 
           height = {540}
        />
        </>
    )
}