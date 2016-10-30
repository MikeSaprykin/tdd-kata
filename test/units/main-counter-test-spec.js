/**
 * Created by Mike on 30.10.16.
 */
describe('Testing string calculator',function(){

  describe('Calculation func is defined',function(){
    it('Calculation func should be defined',function(){
      expect(sumString).toBeDefined()
    });
  });

  describe('Calculate with blank or 1 number in calc string',function () {
    it('should return 0 or 1 number result',function(){
      expect(sumString('')).toBe(0);
      expect(sumString('1')).toBe(1);
    })
  });

  describe('Calculate with 2 numbers in calc string',function () {
    it('should return the sum of two numbers',function () {
      expect(sumString('1,2')).toBe(3);
      expect(sumString("8,7")).toBe(15);
      expect(sumString(' ,2')).toBe(2);
    })
  });

  describe('Calculate with any number of numbers in calc string',function () {
    it('should return the sum of all numbers in string',function () {
      expect(sumString('1,3,5,7')).toBe(16);
      expect(sumString('1,3, ,7,0,12, ')).toBe(23);
      expect(sumString("1,8,12,4,2,9")).toBe(36);
    })
  });

  describe('Calculate with any number of numbers divided by \n',function () {
    it('should return the sum of all numbers in string divided by , or \n',function () {
      expect(sumString("1,\n")).toBe(1);
      expect(sumString("1\n3,2")).toBe(6);
      expect(sumString("1\n4,2\n7\n8")).toBe(22)
    })
  });

  describe('Calculate with any number of numbers and delimiter defined',function () {
    it('should return the sum of all numbers in string divided by pre-defined delimiter',function () {
      expect(sumString("//;\n1;2")).toBe(3);
      expect(sumString("//,\n1,2")).toBe(3);
      expect(sumString("//:\n1:2:8")).toBe(11);
      expect(sumString("//.\n1.2.8.12.3.4")).toBe(30);
    })
  });
  
  describe('Throw exception with list of negatives',function(){
    it('should return an exception message with list of negatives if there is at least one negative',function () {
      expect(sumString("1,2,-2")).toBe('Negatives are not allowed: -2');
      expect(sumString("1,2,-2,-4")).toBe('Negatives are not allowed: -2 -4');
      expect(sumString("1,2\n-2")).toBe('Negatives are not allowed: -2');
      expect(sumString("//:\n1:2:-2:-3:-5")).toBe('Negatives are not allowed: -2 -3 -5')
    })
  })

});
