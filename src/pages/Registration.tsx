import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/Input";
import { Schema } from "../Validation";
import { IRegistration } from "../types/registration.type";

export const RegistrationPage: React.FC= () =>{
    const {handleSubmit, reset, control}= useForm<IRegistration>({
        mode: "onSubmit",
        resolver: zodResolver(Schema)
    })

    const Submit= (data: IRegistration) =>{
        console.log(data);
        reset();
    }

    return (
        <div className="max-w-[700px] mx-auto space-y-5">
            <h1 className="text-3xl font-medium">Registration Form</h1>
            <hr className="text-[gray]"/>
            <form onSubmit={handleSubmit(Submit)} className="space-y-2">
                <Controller name="firstName" control={control} render={({ field, fieldState }) =>(
                    <Input label="Full Name" {...field} error={fieldState.error?.message}/>
                )}/>
                <Controller name="lastName" control={control} render={({ field, fieldState }) =>(
                    <Input label="Last Name" {...field} error={fieldState.error?.message}/>
                )}/>
                <Controller name="email" control={control} render={({ field, fieldState }) =>(
                    <Input label="Email" placeholder="example@email.com" {...field} error={fieldState.error?.message}/>
                )}/>
                <Controller name="phoneNumber" control={control} render={({ field, fieldState }) =>(
                    <Input label="Phone Number" placeholder="09000000000" {...field} error={fieldState.error?.message}/>
                )}/>
                <Controller name="homeNumber" control={control} render={({ field, fieldState }) =>(
                    <Input label="Home Number" placeholder="021-00000000" {...field} error={fieldState.error?.message}/>
                )}/>
                <Controller name="address" control={control} render={({ field, fieldState }) =>(
                    <Input label="Address" {...field} error={fieldState.error?.message}/>
                )}/>
                <button type="submit" className="bg-lightGreen text-[white] px-4 py-2 rounded">Submit</button>
            </form>
        </div>
    )
}