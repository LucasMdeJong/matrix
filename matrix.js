class matrix{
	constructor(rows,cols,cells){
		if(rows*cols!==cells.length) throw("Matrix data must agree.")
		this.size=[rows,cols];
		this.cells=cells;
	}
	
	transpose(){
		let newCells=[];
		for(let j=0;j<this.size[1];j++){
			for(let i=0;i<this.size[0];i++){
				newCells.push(this.cells[this.size[1]*i+j]);
			};
		};
		return new matrix(this.size[1],this.size[0],newCells);
	}
	
	row(i){
		if(i>=this.size[0] || i<0 || !Number.isInteger(i))throw{"Out of range."};
		let arr=[];
		for(let j=0; j<this.size[1];j++){
			arr[j]=this.cells[this.size[1]*i+j];
		};
		return new matrix(1,this,size[1],arr);
	}
	
	col(j){
		if(j>=this.size[1] || j<0 || !Number.isInteger(j))throw{"Out of range."};
		let arr=[];
		for(let i=0; i<this.size[0];i++){
			arr[i]=this.cells[this.size[1]*i+j];
		};
		return new matrix(this.size[0],1,arr);
	}
	
	static sum(a,b){
		if(a.size[0]!==b.size[0] || a.size[1]!==b.size[1]) throw{"Matrix dimensions must agree."};
		let newCells=[];
		for(let i=0;i<a.cells.length;i++){
			newCells[i]=a.cells[i]+b.cells[i];
		};
		return new matrix(a.size[0],a.size[1],newCells);
	}
	
	static substract(a,b){
		if(a.size[0]!==b.size[0] || a.size[1]!==b.size[1]) throw{"Matrix dimensions must agree."};
		let newCells=[];
		for(let i=0;i<a.cells.length;i++){
			newCells[i]=a.cells[i]-b.cells[i];
		};
		return new matrix(a.size[0],a.size[1],newCells);
	}
	
	static multiply(a,b){
		if(a.size[0]!==b.size[0] || a.size[1]!==b.size[1]) throw{"Matrix dimensions must agree."};
		let newCells=[];
		for(let i=0;i<a.cells.length;i++){
			newCells[i]=a.cells[i]*b.cells[i];
		};
		return new matrix(a.size[0],a.size[1],newCells);
	}
	
	static divide(a,b){
		if(a.size[0]!==b.size[0] || a.size[1]!==b.size[1]) throw{"Matrix dimensions must agree."};
		let newCells=[];
		for(let i=0;i<a.cells.length;i++){
			newCells[i]=a.cells[i]/b.cells[i];
		};
		return new matrix(a.size[0],a.size[1],newCells);
	}
	
	static dot(a,b){
		if(a.size[1]!==b.size[0]) throw{"Matrix dimensions must agree."};
		let newCells=[];
		let sum=0;
		for(let i=0;i<a.size[0];i++){
			for(let j=0;j<b.size[1];j++){
				sum=0;
				for(let k=0;k<a.size[1];k++){
					sum+=a.cells[i*a.size[1]+k]*b.cells[k*b.size[1]+j];
				};
				newCells.push(sum);
			};
		};
		return new matrix(a.size[0],b.size[1],newCells);
	}
	
}
