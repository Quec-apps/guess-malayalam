_x = """Mehabooba
https://youtu.be/C8ByfT19Xns
Puthiyoru Lokam
https://youtu.be/lZL2K3ewRYM
Payye Veeshum Kaatil
https://youtu.be/s_lRDM3Ft_I
Onakka Munthiri
https://youtu.be/wya5utKP_Po
Uyire
https://youtu.be/Fd7-FybJlbs
Darshana
https://youtu.be/epAFDEJImrU
Manikya Malaraya Poovi
https://youtu.be/W0fKl43QmIE
Kannil Kannil
https://youtu.be/DlXK47snKp0
Raavu Maayave
https://youtu.be/QQTSs0qeHyw
Aalolam
https://youtu.be/CfTWu4Llbvo
Lailakame 
https://youtu.be/FAn2i7gu32w
Malare
https://youtu.be/0G2VxhV_gXM
Aluva Puzha
https://youtu.be/fiAlruU48HI
Ethu Kari Raavilum
https://youtu.be/dz3ik3XzR54
Mel Mel
https://youtu.be/TXnH6-2HPqE
Thaniye Mizhikal
https://youtu.be/l0yU-mcCM9I
Aaradhike
https://youtu.be/dAezp422I_A
Dooreyo
https://youtu.be/bRYaCXVW7Hg
Uyiril Thodum
https://youtu.be/ZKhOs_Pc_7s
Parayuvaan
https://youtu.be/IWOPRFRNj3g
Uyirin Nadhiye
https://youtu.be/4q5o3Tiwcmc
Neelakasham
https://youtu.be/RmyrkNCFMZk
Sita Kalyanam
https://youtu.be/LRHSq0tTLB0
Roshomon
https://youtu.be/d80VayL1r20
Thumbi Penne
https://youtu.be/elBVykcQ8Qo
Thudakam Mangalyam
https://youtu.be/a3UNpjnYquI
Appangal Eambadum
https://youtu.be/QcESg-9Vfzo
Johny Mone Johny
https://youtu.be/YMcC95uFVCs
Kaikkottum Kandittilla
https://youtu.be/UzqZbwljXzs
Kalippu
https://youtu.be/PeUjir1kMFM
Vennilave Ninnarikil
https://youtu.be/3w_iOdYnoSw
Etho Mazhayil
https://youtu.be/Yuy3BI6wmPU
Madhu Pole
https://youtu.be/ZbwnKmX0ygc
Mazhamegham
https://youtu.be/Os9TlUlCkX0
Ee Shishirakaalam
https://youtu.be/JEeEApK-XqE
Neeyo Njaano
https://youtu.be/YLDuLtNSLAI
Manogatham Bhavan
https://youtu.be/2uTNC3V444o
Aadyam Thammil
https://youtu.be/RNbRM2NsGt8
Sneham Cherum Neram
https://youtu.be/DFZ6eram8Fo
Enthaavo
https://youtu.be/xx4TFd4-wz8
Nilaavil Ellame
https://youtu.be/FVwTyWbW64M
Wow
https://youtu.be/39cFfvYqsQw
Aaro Nenjil
https://youtu.be/UsJkhu8K1gs
Thoominnal
https://youtu.be/rxaqSsTQeGQ
Kizhakku Pookkum
https://youtu.be/YrLRhuim5aM
Njan Kanavil
https://youtu.be/oW0lgLqqoNE"""

splited = _x.split("\n")

songName = splited[: :2]
linkName = splited[1: :2]
# print(songName)
# print(linkName)

import random

def produce(i_value):
    _val = songName[random.randint(0, (len(songName))-1)]
    if _val == i_value:
        produce(i_value)
    else:
        return _val

tmpRepeat=0
for i in songName:
    print(f"""b++;
window["q"+b] = "{i}"; //Ans{tmpRepeat+1}
window["q1"+b] = "{produce(i)}";
window["q2"+b] = "{produce(i)}";
window["q3"+b] = "{produce(i)}";
window["q4"+b] = "{produce(i)}";
window["li"+b] = '{linkName[tmpRepeat]}';
""")
    tmpRepeat+=1