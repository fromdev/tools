
describe('Fromdev Util JS Test Suite', function () {

    beforeEach(function () {
    });
    describe('1. Test Amazon Util Behavior', function () {
        describe('Test Validate ASIN Scenarios', function () {
            it('should validate a good ASIN', function () {
                expect(AmazonUtils.isValidASIN('B016EEU3S4')).toBeTruthy();
                expect(AmazonUtils.isValidASIN('B016EEU3S4')).toBeTruthy();
                expect(AmazonUtils.isValidASIN('0545139708')).toBeTruthy();

            });
            it('should validate a bad ASIN', function () {
                expect(AmazonUtils.isValidASIN('12345')).toBeFalsy();
                expect(AmazonUtils.isValidASIN('/dp/0545139708')).toBeFalsy();
            });
        });

        describe('Test Extract ASIN Scenarios', function () {
            it('Extract a ASIN from any valid Amazon URL', function () {
                expect(AmazonUtils.extractASIN('B016EEU3S4')).toEqual('');
                expect(AmazonUtils.extractASIN('https://www.amazon.com/MintBox-IPC-D2x2-C3337NL-H500-WB-XLM-FM4U-BMint-2-Desktop/dp/B00EONR674')).toEqual('B00EONR674');
                expect(AmazonUtils.extractASIN('https://www.amazon.com/MintBox-IPC-D2x2-C3337NL-H500-WB-XLM-FM4U-BMint-2-Desktop/dp/B00EONR674/')).toEqual('B00EONR674');
                expect(AmazonUtils.extractASIN('https://www.amazon.com/CompuLab-fit-Headless-Display-Emulator/dp/B00FLZXGJ6/ref=pd_sim_147_3?_encoding=UTF8&psc=1&refRID=6B8NRRYW1V0VH98QZV6J')).toEqual('B00FLZXGJ6');
                expect(AmazonUtils.extractASIN('https://www.amazon.com/dp/B01LWW2CGN?psc=1')).toEqual('B01LWW2CGN');
                expect(AmazonUtils.extractASIN('https://www.amazon.com/dp/B01LWW2CGN')).toEqual('B01LWW2CGN');
                expect(AmazonUtils.extractASIN('http://www.amazon.com/Kindle-Wireless-Reading-Display-Generation/dp/B0015T963C')).toEqual('B0015T963C');
                expect(AmazonUtils.extractASIN('http://www.amazon.com/dp/B0015T963C')).toEqual('B0015T963C');
                expect(AmazonUtils.extractASIN('http://www.amazon.com/gp/product/B0015T963C')).toEqual('B0015T963C');
                expect(AmazonUtils.extractASIN('http://www.amazon.com/gp/product/glance/B0015T963C')).toEqual('B0015T963C');
            });
        });
        describe('Test Create Clean Affiliate URL Scenarios', function () {
            it('Format a clean Affiliate Amazon URL', function () {
                expect(AmazonUtils.createCleanAffiliateURL('https://www.amazon.com/MintBox-IPC-D2x2-C3337NL-H500-WB-XLM-FM4U-BMint-2-Desktop/dp/B00EONR674')).toEqual('https://www.amazon.com/MintBox-IPC-D2x2-C3337NL-H500-WB-XLM-FM4U-BMint-2-Desktop/dp/B00EONR674' + '?tag=fromdevtools-20');
                expect(AmazonUtils.createCleanAffiliateURL('https://www.amazon.com/MintBox-IPC-D2x2-C3337NL-H500-WB-XLM-FM4U-BMint-2-Desktop/dp/B00EONR674/')).toEqual('https://www.amazon.com/MintBox-IPC-D2x2-C3337NL-H500-WB-XLM-FM4U-BMint-2-Desktop/dp/B00EONR674' + '?tag=fromdevtools-20');
                expect(AmazonUtils.createCleanAffiliateURL('https://www.amazon.com/CompuLab-fit-Headless-Display-Emulator/dp/B00FLZXGJ6/ref=pd_sim_147_3?_encoding=UTF8&psc=1&refRID=6B8NRRYW1V0VH98QZV6J')).toEqual('https://www.amazon.com/CompuLab-fit-Headless-Display-Emulator/dp/B00FLZXGJ6' + '?tag=fromdevtools-20');
                expect(AmazonUtils.createCleanAffiliateURL('https://www.amazon.com/dp/B01LWW2CGN?psc=1')).toEqual('https://www.amazon.com/dp/B01LWW2CGN' + '?tag=fromdevtools-20');
                expect(AmazonUtils.createCleanAffiliateURL('https://www.amazon.com/dp/B01LWW2CGN', '')).toEqual('https://www.amazon.com/dp/B01LWW2CGN' + '?tag=fromdevtools-20');
                expect(AmazonUtils.createCleanAffiliateURL('http://www.amazon.com/Kindle-Wireless-Reading-Display-Generation/dp/B0015T963C', 'mytag')).toEqual('http://www.amazon.com/Kindle-Wireless-Reading-Display-Generation/dp/B0015T963C' + '?tag=mytag');
                expect(AmazonUtils.createCleanAffiliateURL('http://www.amazon.com/dp/B0015T963C', '')).toEqual('http://www.amazon.com/dp/B0015T963C' + '?tag=fromdevtools-20');
                expect(AmazonUtils.createCleanAffiliateURL('http://www.amazon.com/gp/product/B0015T963C', 'wrongasin')).toEqual('http://www.amazon.com/gp/product/B0015T963C' + '?tag=fromdevtools-20');
                expect(AmazonUtils.createCleanAffiliateURL('http://www.amazon.com/gp/product/glance/B0015T963C')).toEqual('http://www.amazon.com/gp/product/glance/B0015T963C' + '?tag=fromdevtools-20');
            });
        });
    });

    describe('2. Test Storage Util Scenario', function () {
        it('Should Set a Value and Retrieve it', function () {
            StorageUtils.setItem('mytestkey', 'mytestvalue');
            expect(StorageUtils.getItem('mytestkey')).toEqual('mytestvalue');
            StorageUtils.setItem('mytestkey', 'newvalue');
            expect(StorageUtils.getItem('mytestkey')).toEqual('newvalue');
        });

    });

    describe('3. Test Array Util Scenario', function () {
        it('Should Eliminate duplicates from an array', function () {
            var arr = [];
            expect(ArrayUtils.removeDuplicates(arr)).toEqual(arr);
            arr = [1,2,3,4];
            expect(ArrayUtils.removeDuplicates(arr)).toEqual(arr);
            var arr2 = [1,2,3,4,4];
            expect(ArrayUtils.removeDuplicates(arr2)).toEqual(arr);
            var arr2 = [1,2,3,3,3,4,4];
            expect(ArrayUtils.removeDuplicates(arr2)).toEqual(arr);
            expect(ArrayUtils.removeDuplicates()).toEqual([]);
        });
        it('Should Shuffle an array', function () {
            var arr = [];
            expect(ArrayUtils.shuffle(arr).length).toEqual(arr.length);
            arr = [1,2,3,4];
            var shuffled = ArrayUtils.shuffle(arr);
            expect(shuffled.length).toBe(4);
        });

    });
    describe('4. Test URL Util Scenario', function () {
        it('Should Extract Domain from a URL', function () {
            expect(UrlUtils.extractDomain('http://www.amazon.com/gp/product/glance/B0015T963C')).toEqual('www.amazon.com');
            expect(UrlUtils.extractDomain('http://www.fromdev.com/2015/01/computer-programming-books.html')).toEqual('www.fromdev.com');
            expect(UrlUtils.extractDomain('')).toEqual('');
            expect(UrlUtils.extractDomain()).toEqual('');
        });

        it('Should Extract Domain list from a URL list', function () {
            var urls = ['http://www.amazon.com/gp/product/glance/B0015T963C','http://www.fromdev.com/2015/01/computer-programming-books.html'];
            var domains = ['www.amazon.com','www.fromdev.com'];
            expect(UrlUtils.extractDomainList(urls)).toEqual(domains);
            urls = [];
            domains = [];
            expect(UrlUtils.extractDomainList(urls)).toEqual(domains);
            expect(UrlUtils.extractDomainList()).toEqual(domains);
        });

    });

    describe('5. Test Random Util', function(){
        it('Should return a random number in range', function(){
            expect(RandomUtils.getRandomInt(1,10)).toBeGreaterThan(0);
            expect(RandomUtils.getRandomInt(1,10)).toBeLessThan(11);
            expect(RandomUtils.getRandomInt()).toBeGreaterThan(-1);
            expect(RandomUtils.getRandomInt()).toBeLessThan(11);
        });

    });
});
