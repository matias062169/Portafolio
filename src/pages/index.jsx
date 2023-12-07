import Image from 'next/image'
import { Inter } from 'next/font/google'
import Presentacion from '@/components/Presentacion'
import SobreMi from '@/components/SobreMi'
import MisProyectos from '@/components/MisProyectos'
import MisExperiencias from '@/components/MisExperiencias'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Presentacion />
      <SobreMi />
      <MisProyectos />
      <MisExperiencias />
    </>
  )
}
