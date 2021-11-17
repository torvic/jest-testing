const { createRobot } = require('./createRobot')

describe("createRobot", () => {
	test("should return something", () => {
		expect(createRobot()).not.toBeFalsy()
	})
	test('should get the x and y coordinate of the robot (without arguments)', () => {
		const robot = createRobot()
		expect(robot.getX()).toBe(0)
		expect(robot.getY()).toBe(0)
	})
	test('should get the x and y coordinate of the robot (with arguments)', () => {
		const robot = createRobot(1, 2)
		expect(robot.getX()).toBe(1)
		expect(robot.getY()).toBe(2)
	})
	test('should return error if x or y are outside the limits 0 and 10', () => {
		expect(() => createRobot(11, -1)).toThrowError(Error)
		expect(() => createRobot(-1, -1)).toThrowError(Error)
	})
	test('should have moveRight and moveUp method that increments by one x or y', () => {
		const robot = createRobot(1, 2)
		expect(robot.moveRight()).toBe(2)
		expect(robot.moveUp()).toBe(3)
	})
	test('should have moveLeft and moveDown method that decrement by one x or y', () => {
		const robot = createRobot(1, 2)
		expect(robot.moveLeft()).toBe(0)
		expect(robot.moveDown()).toBe(1)
	})
})