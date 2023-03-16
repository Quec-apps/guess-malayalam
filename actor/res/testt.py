_x = """Manju Warrier
Parvathy Thiruvothu
Nithya Menen
Miya
Nazriya Nazim
Anupama Parameshwaran
Priya Varrier
Nivetha Thomas
Amala Paul
Pearle Maaney
Madonna Sebastian
Anu Sithara
Saniya Iyappan
Manjima Mohan
Aishwarya Lekshmi
Kavya Madhavan
Rajisha Vijayan
Meera Jasmine
Mamta Mohandas
Nyla Usha
Gayathri Suresh
Anikha Surendran
Aparna Balamurali
Namitha Pramod
Honey Rose
Prayaga Martin
Anusree
Bhavana Menon
Shamna Kasim
Meera Nandan
Navya Nair
Remya Nambeesan
Rima Kallingal
Reba Monica John
Nikhila Vimal
Aditi Ravi
Anaswara Rajan
Anna Ben
Geetu Mohandas
Srinda Arhaan
Grace Antony
Durga Krishna
Ann Augustine
Malavika Menon
Rachana Narayanankutty
Shafna Nizam
Lena Kumar
Niranjana Anoop
Shaalin Zoya
Nimisha Sajayan
Sanusha Santhosh
Sana Althaf
Samvritha Sunil
Jewel Mary
Malavika Wales
Sruthi Lakshmi
Aparna Gopinath
Mythili 
Shwetha Menon
Samskruthy Shenoy
Asha Sharath
Samyuktha Varma
Jyothirmayi
Nandana Varma
Priyanka Nair
Malavika Mohanan
Sai Pallavi
Raai Laxmi
Nikki Galrani
Keerthy Suresh
Isha Talwar
Meghana Raj
Deepti Sati
Padmapriya Janakiraman
Poornima Indrajith
Priyamani
Kaniha
Archana Kavi
Rachel David
Neeraja Das
Roma Asrani
Swathi Reddy
Charmila"""

splited = _x.split("\n")

import random

def produce(i_value):
    _val = splited[random.randint(0, (len(splited))-1)]
    if _val == i_value:
        produce(i_value)
    else:
        return _val

for i in splited:
    print(f"""a++;
window["ans"+a] = "{i}"; //Answer
window["noans1"+a] = "{produce(i)}";
window["noans2"+a] = "{produce(i)}";
window["noans3"+a] = "{produce(i)}";
window["noans4"+a] = "{produce(i)}";
""")