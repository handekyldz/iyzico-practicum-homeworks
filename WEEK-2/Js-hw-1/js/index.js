let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

const developer =
  experience < 5
    ? () => alert('Bir cok konuyu biliyorum')
    : () => alert('Hicbir sey bilmiyorum:)');

developer();