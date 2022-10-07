import Image from "../src/components/image";

export default function test() {
    return (
        <div className=" h-screen v-screen bg-black">

            <div>
                <h1 className="text-white text-5xl">Test</h1>

            </div>

            <Image src="/images/avatars.png" alt="" width={500} height={500} />



        </div>
    );
}