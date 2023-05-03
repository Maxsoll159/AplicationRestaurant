import { NarBar } from "@/app/components";
import { HeadersReser } from "../components/HeadersReser";
import { Form } from "../components/Form";

export default function ReserverPage() {
    return (
        <>
            <div className="border-t h-screen">
                <div className="py-9 w-3/5 m-auto">
                    {/* HEADER */}
                    <HeadersReser />
                    {/* HEADER */} {/* FORM */}
                    <Form />
                </div>
            </div>
        </>

    )
}