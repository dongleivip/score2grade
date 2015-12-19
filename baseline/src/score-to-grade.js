function scrore_to_grade(number){
	if(number>100){
		throw new Error("throw exception!");
		return "+";
	}
	else if(number<=100 && number>=90)
		return "S";
	else if(number <90 && number>=80)
		return "A";
	else if(number <80 && number>=70)
		return "B";
	else if(number <70 && number>=60)
		return "C";
	else if(number<0)
		return "-";
	else 
		return "D";
}
