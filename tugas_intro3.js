//TUGAS 3, NOMER 1
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
        let cek = dataDay.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error('Hari ini bukan hari kerja'));
        }
      }, 3000);
    });
  };
  
  // Menggunakan then dan catch
  cekHariKerja('senin')
    .then((result) => {
      console.log(`Hari kerja: ${result}`);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
  
  // Menggunakan try dan catch
  async function main() {
    try {
      const result = await cekHariKerja('rabu');
      console.log(`Hari kerja: ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  
  main();

//TUGAS 3, NOMER 2
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["January", "February", "Maret", "April", "Mel", "Juni", "Juli", "Agustus", "September", "Oktober", "November",
        "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }  
    }, 4000);
}

// Callback function untuk menampilkan semua bulan menggunakan method map
const displayMonths = (error, months) => {
    if (error) {
      console.error(error.message);
    } else {
      const monthAbbreviations = months.map((month, index) => {
        return `${index + 1}. ${month}`;
      });
      console.log(monthAbbreviations.join("\n"));
    }
  };
  
  // Panggil getMonth dengan callback displayMonths
  getMonth(displayMonths);

//TUGAS 3, NOMER 3, BAGIAN 1
const cekMataPembelajaran = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataMapel = ['Bahasa Indonesia', 'Bahasa Inggris', 'Matematika', 'PAIBP', 'Olahraga'];
        let cek = dataMapel.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error('Mapel ini tidak ada'));
        }
      }, 3000);
    });
  };
  
  // Menggunakan then dan catch
  cekMataPembelajaran('Bahasa Indonesia')
    .then((result) => {
      console.log(`Mata Pembelajaran: ${result}`);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
  
  // Menggunakan try dan catch
  async function main() {
    try {
      const result = await cekMataPembelajaran('Matematika');
      console.log(`Mata Pembelajaran: ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  main();

  //TUGAS 3, NOMER 3, BAGIAN 2
const cekNamaGuru = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataGuru = ['Bu Puri Andewi', 'Pa Jaya Sumpena', 'Bu Nur fauziyyah', 'Bu Praitiwi', 'Bu Nova'];
        let cek = dataGuru.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error('Hari ini guru tidak masuk'));
        }
      }, 3000);
    });
  };
  
  // Menggunakan then dan catch
  cekMataPembelajaran('Bu Puri Andewi')
    .then((result) => {
      console.log(`Nama Guru: ${result}`);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
  
  // Menggunakan try dan catch
  async function main() {
    try {
      const result = await cekNamaGuru('Bu Nur Fauziyyah');
      console.log(`Nama Guru: ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  main();


//TUGAS 3, NOMER 4
// Menggunakan fungsi fetch untuk mengambil data dari REST API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Terjadi kesalahan saat mengambil data.');
    }
    return response.json();
  })
  .then(data => {
    // Mengambil semua nama (name) dari data
    const names = data.map(user => user.name);
    
    // Menampilkan semua nama di konsol
    console.log(names);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });
  

  