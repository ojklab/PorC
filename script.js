PetiteVue.createApp({
  pattern: [
    {
      name: '異なる役職を選ぶ',
      unit: '人',
      c_p: 'C'
    },
    {
      name: '物・人を一列に並べる',
      unit: '個',
      c_p: 'P'
    },
    {
      name: '物・人を円に並べる',
      unit: '個',
      c_p: 'C'
    },
    {
      name: 'ペアをつくる',
      unit: '人',
      c_p: 'C'
    },
    {
      name: 'カードを選んで整数をつくる',
      unit: '枚',
      c_p: 'P'
    },      
  ],
  selectedID: 99,
  setForm() {
    this.unit = this.pattern[this.selectedID].unit;
    this.showForm = true;
  },
  n: '',
  k: '',
  unit: '',
  c_p: '',
  showForm: false,
  showResult: false,
  error: {
    flag: false,
    msg: ''
  },
  showFormula() {
    if (!this.n || !this.k) {
      this.error.flag = true;
      this.error.msg = '数値を入力してください';
      return;
    }
    if (this.n <= this.k) {
      this.error.flag = true;
      this.error.msg = 'n は k より大きくなくてはいけません';
      return;
    }
    const selectedPattern = this.pattern[this.selectedID];
    this.c_p = selectedPattern.c_p;
    console.log(this.c_p);
    this.showResult = true;
  }
}).mount();

