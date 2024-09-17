import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/User";

interface CardUserProps {
  value: User;
  key: number;

}

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SolarCityBold } from "../icons/city";
import { MapCityHall } from "../icons/country";
import { IcBaselineEmail } from "../icons/email";
import { BiPhoneFill } from "../icons/phone";
import { SolarUserIdBold } from "../icons/user";



export default function CardUser({ value } :CardUserProps) {
         
 return (
    <Card className="">
    <CardHeader>
      <Avatar className={`w-[50px] h-[50px] transparent`}>
        <AvatarImage src={value.picture.thumbnail} alt={value.name.first} />
        <AvatarFallback>
          {value.name.first[0]} {value.name.last[0]}
        </AvatarFallback>
      </Avatar>

      <CardTitle className="text-[1rem] font-semibold mt-2">
        {value ? `${value.name.first} ${value.name.last}` : "Sin nombre"}
      </CardTitle>
      <CardDescription className="text-xs font-normal text-[#919eab] pb-0.5">
        Edad: {value.dob.age} años
      </CardDescription>
      <CardDescription className="text-xs font-normal  flex-row flex items-center gap-1 text-[#00a135]">
        {" "}
       <MapCityHall className="w-4 h-4 "  /> 
        <p className="pt-1"> {value.location.country}</p>
      </CardDescription>
    </CardHeader>
    <CardFooter className="border-t border-neutral-200 border-dotted text-xs text-[#919eab] pt-5">
      <div className="grid grid-cols-2 gap-x-20">
        <div className="space-y-3">
        <p className=" space-x-2 flex flex-row ">
            <IcBaselineEmail className="w-4 h-4 "  />

            {value.email}
          </p>
          
          <p className=" flex flex-row">
           <SolarUserIdBold className="w-4 h-4 "  />
            {value.login.username}
          </p>
        </div>

        <div className="ml-5 space-y-3">
          <p className="flex flex-row ">
            {" "}
            <BiPhoneFill  className="w-4 h-4 "  />
            
            {value.phone}
          </p>

          <p className=" flex flex-row">
            
            <SolarCityBold className="w-4 h-4 "  /> 
              {value.location.city}
            </p>
        </div>
      </div>
    </CardFooter>
  </Card>
 );
}