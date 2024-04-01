import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>TrustPix - Alternativa segura y privada a Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">TrustPix</h1>
        <p className="text-xl mb-8">Una alternativa segura y privada a Instagram</p>

        <Link href="https://play.google.com/store/apps/details?id=com.trustpix">
  		<div className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg mr-4">
    			<FaGooglePlay className="mr-2" />
    			Google Play
  		</div>
	</Link>


        <div className="flex justify-center">
          <Image
            src="/qr-code.png"
            alt="QR Code"
            width={200}
            height={200}
          />
        </div>
      </main>
    </div>
  );
}
