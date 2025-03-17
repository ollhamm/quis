// import React, { useState } from "react";
// import FormInput from "./FormInput";
// import SubmitButton from "./SubmitButton";

// const UploadForm: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   return (
//     <div className="w-full max-w-md mx-auto p-6">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <FormInput
//           label="Judul"
//           id="title"
//           name="title"
//           value={formData.title}
//           onChange={handleInputChange}
//           placeholder="Masukkan judul"
//           required
//         />

//         <FileUpload
//           onFileChange={handleFileChange}
//           selectedFile={formData.file}
//         />

//         <SubmitButton label="Submit" isLoading={isLoading} />
//       </form>
//     </div>
//   );
// };

// export default UploadForm;
