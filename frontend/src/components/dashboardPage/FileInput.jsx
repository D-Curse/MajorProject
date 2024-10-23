import { useState } from 'react';

const FileInput = () => {
  const [uploadHistory, setUploadHistory] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newUploads = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      newUploads.push({
        fileName: file.name,
        preview: URL.createObjectURL(file),
        result: 'Pending' 
      });
    }

    setUploadHistory((prevUploads) => [...prevUploads, ...newUploads]);
  };

  return (
    <>
        <section className="pt-10 flex justify-center items-center">
            <div className="border border-dashed w-[80%] border-gray-500 relative rounded-lg flex flex-col justify-center items-center">
                <input
                type="file"
                multiple
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-50"
                onChange={handleFileUpload}
                />
                <div className="flex flex-col justify-center items-center p-10 text-white text-center font-bold text-xl">
                <img
                    src="/images/dashboardPage/Upload.png"
                    className="p-[50px]"
                    alt=""
                />
                <h4>
                    DROP YOUR IMAGE HERE
                    <br />
                    <p className='py-2'>OR</p>
                </h4>
                <p>SELECT FILE</p>
                </div>
            </div>
        </section>

        <section className="pt-10 flex justify-center items-center">
          <div className="w-[80%]">
            <h3 className="text-white text-4xl font-bold">History</h3>
            <div className="mt-12">
              {uploadHistory.length > 0 && (
                <table className="w-full text-white text-left">
                  <thead>
                    <tr>
                      <th className="text-left">FileName</th>
                      <th className="text-right">Preview</th>
                      <th className="text-right">Result</th>
                    </tr>
                  </thead>
                  <tbody className='pt-4'>
                    {uploadHistory.map((upload, index) => (
                      <tr key={index} className="border-b border-white">
                        <td className="text-left pt-6 pb-4">{upload.fileName}</td>
                        <td className="text-right">
                          <button
                            onClick={() => window.open(upload.preview, '_blank')}
                            className="bg-indigo-500 text-white px-4 py-2 rounded-md"
                          >
                            View
                          </button>
                        </td>
                        <td className="text-right">
                          <span
                            className={`${
                              upload.result === 'Real' ? 'bg-green-500' : 'bg-red-500'
                            } px-4 py-2 rounded-full`}
                          >
                            {upload.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </section>

    </>
  );
};

export default FileInput;
