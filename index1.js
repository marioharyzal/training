function solution(jamMasuk, jamKeluar) {
    const waktuAwalJam = new Date(`Mon May 23 2022 ${jamMasuk}`).getHours()
    const waktuAkhirJam = new Date(`Mon May 23 2022 ${jamKeluar}`)
        .getHours()

    const waktuAwalMinutes = new Date(`Mon May 23 2022 ${jamMasuk}`).getMinutes()
    const waktuAkhirMinutes = new Date(`Mon May 23 2022 ${jamKeluar}`)
        .getMinutes()

    const selisihJam = waktuAkhirJam - waktuAwalJam
    const selisihMinutes = waktuAkhirMinutes - waktuAwalMinutes

    console.log(selisihJam)
    console.log(selisihMinutes)

    switch (selisihJam) {
        case 1:
            console.log("350.000")
            break;
        case 2:
            console.log("500.000")
            break;
        default:
            const bayar = (selisihJam * 2) * 150000
            console.log(bayar)
            break;
    }
}

solution('12:30', '17:00')