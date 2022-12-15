import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

const trooblob = new Blob([JSON.stringify({ troobit: true }, null, 2)], {
  type: "application/json",
});

serve(
  (req: Request) =>
    new Response(trooblob, {
      status: 200,
    })
);
