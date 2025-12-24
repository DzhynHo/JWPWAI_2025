import { getMeals, saveMeal } from "@/lib/meals"; 

export async function GET() {
  const meals = await getMeals();
  return Response.json(meals);
}

export async function POST(req) {
  const data = await req.json();
  saveMeal(data); 
  return Response.json({ message: "Meal added!" }, { status: 201 });
}
