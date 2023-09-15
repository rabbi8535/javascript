let x =65;

if(x>=95 && x<=100){
    document.write(" You got A+(With letter mark).")
}

else if(x>=80 && x<=100){
    document.write(" You got A+");
}

else if(x>=60 && x<=100){
    document.write(" You got A");
}

else if(x>=50 && x<=100){
    document.write(" You got A-");
}

else if(x>=40 && x<=100){
    document.write(" You got B-");
}

else if(x>=33 && x<=100){
    document.write(" You got C-");
}

else if(x>=20 && x<=100){
    document.write(" You are failed");
}
else if(x>=0 && x<=100){
    document.write(" You are failed (With letter mark)");
}

else{
    document.write(" Pleasse give valid percentage");
}


