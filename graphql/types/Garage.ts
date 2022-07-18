import { objectType, extendType } from "nexus";
import {User} from "./User"

export const Garage = objectType({
    name: "Garage",
    definition(t) {
        t.string("garage_id");
        t.string("garage_name");
        t.string("garage_services");
        t.string("garage_location");
        t.string("garage_phone");
        t.string("garage_email");
        t.string("garage_website");
        t.string("time_open");
        t.string("time_close");
        t.string("garage_image");
        t.string("garage_description");
        t.list.field("users", {
            type: User,
            async resolve(_parent: any, _args: any, ctx: any) {
                return await ctx.prisma.user.findMany({
                    where: {
                        garage_id: _parent.garage_id,
                    }
                })
            }   // getUsers
        });
        t.string("created_at");
    }
});