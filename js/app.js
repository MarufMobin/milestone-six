
// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 

const student = {
    stuInfo: {
        name: "Md Rocky",
        gpa: 4.00,
        year: "3rd Semister"
    },
    subject: [ 'Mathmatics', 'Physics','English','Bangla'],
    educationBill: function( ){
        // console.log(this.stuInfo)
        return this.stuInfo;
    }

};
const studentInfo = student.educationBill();
// console.log(studentInfo); // eita diye ekta full properti retunr koralam


// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

// normal way
// const tempStrn = `${student.stuInfo.name} ${student.stuInfo.gpa} ${student.stuInfo.year}`;

// usign destructuring
// const { name, year, gpa } = student.stuInfo;



// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 

const arr = () => { return 89 };
// console.log(arr())

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 

const arr2 = result => { return result / 7 };
// console.log(arr(14))


// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

const arr3 = ( number1, number2 ) =>{ 
    const sum = number1 + number2;
    return sum / 2;
}
// console.log(arr( 50,182 ))



// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const arr4 = (num1, num2) =>{
    return num1 + 7 + num2 + 7;
}
// console.log(arr(5,2))

const arr5 = (num1, num2) =>{
    const fistNum = num1 + 7;
    const secNum = num2 + 7;
    return fistNum + secNum
}
// console.log(arr(5,2))



const multi= (para1, para2) => {
    return ( para1 + para2) / 2;
}
// console.log(multi(1, 10))



// ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const arr6  = [ 25, 55, 841, 51, 574, 255, 72, 25 ];
const  result = arr6.map( arr6 => arr6 / 7 );
// console.log(result);

/* map ar full version
function munna(sdkfks){
    return sdkfks / 7
} */

// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

// Array ati akta NonPremitive type data jetar Modhe Onk guli array,Number,string,boolean,Object type ar data rakha jai abong ar value k index dore ber kra jai ar index no : 0 thake start hoi ar know unKnown index thakle taile ar man hobe -1. Ar length ar katre (indexNumber + 1) diye ans pawa jai 

//  array ar kichu methods o ache ja array thake data ber ba condition ar kkhatre onk subidha jonok 
// Array Mathods :  map, forEach, filter, find 

// map: ata Array ar ketre use hoi jokhon know value lagbe kintu return ar dorkar nai, tokhon map use hoi, map akta array te value return kre

// forEach: aitaw array ar jonnow define kra ar aitar kaj hoche j array ar protita element ber kre dibe;

//filter : aita akta array dibe ar ake call kre condition diye dile ooi feed back akta array dibe ;

// find : find hoche array ar arekta method ata diye array ar condition check kre ar jodi condition onk guli match hoi taile prothom ta output dei ar porer taw ba baki guli dei an jast fist ar ta array akare dei

// Munna defination
//array is one kind of object which is high level and list object 
// map is a new arary which is create after doing somethig with an previous array
//filter is alomost similet to the map but if it return true then it will be create a new array otherwise nothing 
// find hocce amkta array er modhe first er tar sogge mile jabe oitai retuin korbe mane find er condition mile gele r ki

// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const student2 = {
    stuInfo: {
        name: "Md Rocky",
        gpa: 4.00,
        year: "3rd Semister"
    },
    subject: [ 'Mathmatics', 'Physics','English','Bangla'],
    educationBill: function( ){
        // console.log(this.stuInfo)
        return this.stuInfo;
    }

};

const {name,gpa,year} = student.stuInfo;
const {subject} = student;
// console.log(subject[0]);
// console.log(name);


// const balance = student.subject;
// console.log(balance[2])

// munna code 
// age distructring korbi
const student3 = {
    name2: "Md Rocky",
    gpa2: 4.00,
    year2: "3rd Semister"
}

const { name2, gpa2:balance , year2} = student3;
// console.log(balance)


// ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 



// https://jsonplaceholder.typicode.com/photos

/* 
fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then( data => console.log(data)); */


const fatchData = async () =>{
  
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    loadData(data);
}
fatchData()
const loadData = (elements) =>{
    
    const parentContainer = document.getElementById('img-container');
    for( const element of elements){
        const div = document.createElement('div');
        div.classList.add('col-md-3','my-3');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${element.thumbnailUrl}" class="card-img-top" alt="..." onclick="showDetailsData('${element.id}')">
            <div class="card-body">
            <p class="card-text">${element.title}</p>
            </div>
        </div>
        `;
        parentContainer.appendChild(div)
    }
}

// ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে /{id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 

const showDetailsData = ( details ) =>{
    const url = `https://jsonplaceholder.typicode.com/photos/${details}`;
    fetch(url)
    .then( res => res.json())
    .then( data => showDetails(data))
    

};


const showDetails = data =>{
    // console.log(data)  //url title thumbnailUrl
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = '';
    window.scrollTo( 0, 40)
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
        <div class="card mb-3 col-md-7 me-2">
            <img src="${data.url}" class="card-img-top" alt="..." height="150px">
        </div>
        <div class="card mb-3 col-md-5" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${data.thumbnailUrl}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                </div>
            </div>
            </div>
        </div>                                                  
    `;
    detailsContainer.appendChild(div);

}


