const testDay = require('./app.js');

function runTests() {
    let passed = 0;
    let failed = 0;

    function test(name, callback) {
        try {
            callback();
            console.log(`✅ Тест "${name}" выполнен успешно`);
            passed++;
        } catch (error) {
            console.error(`❌ Тест "${name}" не пройден: ${error.message}`);
            failed++;
        }
    }

    test('Чётный день', () => {
        const evenDay = new Date('2024-05-02');
        if (!testDay(evenDay)) {
            throw new Error('Ожидалось true для чётного дня');
        }
    });

    test('Нечётный день', () => {
        const oddDay = new Date('2024-04-03');
        if (testDay(oddDay)) {
            throw new Error('Ожидалось false для нечётного дня');
        }
    });

    test('Первый день месяца', () => {
        const firstDay = new Date('2024-09-01');
        if (testDay(firstDay)) {
            throw new Error('Ожидалось false для первого дня месяца');
        }
    });

    console.log(`\nИтоги тестирования:`);
    console.log(`✅ Успешно: ${passed}`);
    console.log(`❌ Не пройдено: ${failed}`);

    if (failed === 0) {
        console.log('🎉 Все тесты пройдены успешно!');
    } else {
        console.error('💥 Некоторые тесты не пройдены!');
    }
}

runTests();