/**
 * @param {string} fileName - The original filename, with extension
 *  @returns {[string, string]} [file, ext] - an array with the file name and extension
 * */
export function splitFileName(fileName: string) {
	const fileNameParts = fileName.split('.');
	const ext = fileNameParts.pop();
	const fileNameNoExt = fileNameParts.join('.');

	return [fileNameNoExt, ext];
}
