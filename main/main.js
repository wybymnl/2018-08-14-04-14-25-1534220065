module.exports = function main(numStr) {
    var str = numStr;
    let lcd_num = [];
    let lcd_item = [];
    let items =[
        ['._.','|.|','|_|'],//0
        ['...','..|','..|'],//1
        ['._.','._|','|_.'],//2
        ['._.','._|','._|'],//3
        ['...','|_|','..|'],//4
        ['._.','|_.','._|'],//5
        ['._.','|_.','|_|'],//6
        ['._.','..|','..|'],//7
        ['._.','|_|','|_|'],//8
        ['._.','|_|','..|'],//9
    ];
    for(i=0;i<str.length;i++){
        lcd_num.push(parseInt(str[i]))
    }
     lcd_num.map((value,index)=>{
        lcd_item.push(items[value])
    })
     var result = ``;
    for(let i = 0;i<3;i++){
        for(let k = 0;k<lcd_item.length;k++){
            if(k==lcd_item.length-1){
                result += `${lcd_item[k][i]}`
            }else{
                result += `${lcd_item[k][i]} `
            }
        }
            result +=`\n`;
    }
    return result
}; 