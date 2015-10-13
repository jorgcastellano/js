function ppt(){
	var min = 1;
	var max = 3;

	var cpu;

	do{
		cpu = Math.random() * max;
		console.log(cpu);
		cpu = Math.round(cpu);
		cpu = parseInt(cpu);
	}while(cpu<=0);

	console.log(cpu);
}