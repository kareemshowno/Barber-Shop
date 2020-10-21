const formaCurrency = (num) =>{
	return ('$' + Number(num.toFixed(1)).toLocaleString());
}
export default formaCurrency;