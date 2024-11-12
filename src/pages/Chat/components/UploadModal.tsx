// // component : 채팅 파일업로드 //

// import React from "react";
// import { FileText, Image, Mic, X } from "lucide-react";
// import * as styles from "./UploadModal.css";

// interface UploadModalProps {
//   isVisible: boolean;
//   onClose: () => void;
//   onOptionSelect: (option: string) => void;
// }

// const UploadModal: React.FC<UploadModalProps> = ({
//   isVisible,
//   onClose,
//   onOptionSelect,
// }) => {
//   if (!isVisible) return null;

//   const options = [
//     { icon: <FileText size={24} />, id: "파일", label: "파일", action: "file" },
//     {
//       icon: <Image size={24} />,
//       id: "이미지",
//       label: "이미지",
//       action: "image",
//     },
//     { icon: <Mic size={24} />, id: "음성", label: "음성", action: "audio" },
//   ];

//   return (
//     <div className={styles.overlay} onClick={onClose}>
//       <div
//         className={styles.optionsContainer}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button className={styles.closeButton} onClick={onClose}>
//           <X size={24} />
//         </button>
//         {options.map((option) => (
//           <button
//             key={option.id}
//             className={styles.optionButton}
//             onClick={() => onOptionSelect(option.action)}
//           >
//             <div className={styles.optionIcon}>{option.icon}</div>
//             <span className={styles.optionLabel}>{option.label}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UploadModal;

import React from "react";
import { FileText, Image, Mic } from "lucide-react";
//import {X} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UploadModalProps {
  isVisible: boolean;
  onClose: () => void;
  onOptionSelect: (option: string) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({
  isVisible,
  onClose,
  onOptionSelect,
}) => {
  const options = [
    {
      icon: <FileText className="h-6 w-6" />,
      id: "file",
      label: "파일",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: <Image className="h-6 w-6" />,
      id: "image",
      label: "이미지",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: <Mic className="h-6 w-6" />,
      id: "audio",
      label: "음성",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
  ];

  return (
    <Dialog open={isVisible} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>파일 업로드</DialogTitle>
        </DialogHeader>
        <div className="flex justify-around py-6">
          {options.map((option) => (
            <div key={option.id} className="flex flex-col items-center gap-3">
              <Button
                variant="ghost"
                size="lg"
                className={cn(
                  "h-16 w-16 rounded-full",
                  "transition-all duration-200",
                  option.color,
                  option.hoverColor,
                  "group",
                )}
                onClick={() => {
                  onOptionSelect(option.id);
                  onClose();
                }}
              >
                <div className="text-white transition-transform duration-200 group-hover:scale-110">
                  {option.icon}
                </div>
              </Button>
              <span className="text-sm font-medium text-muted-foreground">
                {option.label}
              </span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;

// 모바일 환경을 위한 바텀 시트 버전
// const BottomSheetUploadModal: React.FC<UploadModalProps> = ({
//   isVisible,
//   onClose,
//   onOptionSelect,
// }) => {
//   const options = [
//     {
//       icon: <FileText className="h-6 w-6" />,
//       id: "file",
//       label: "파일",
//       color: "bg-blue-500",
//       hoverColor: "hover:bg-blue-600",
//     },
//     {
//       icon: <Image className="h-6 w-6" />,
//       id: "image",
//       label: "이미지",
//       color: "bg-green-500",
//       hoverColor: "hover:bg-green-600",
//     },
//     {
//       icon: <Mic className="h-6 w-6" />,
//       id: "audio",
//       label: "음성",
//       color: "bg-purple-500",
//       hoverColor: "hover:bg-purple-600",
//     },
//   ];

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
//       <div
//         className="fixed inset-x-0 bottom-0 z-50 mt-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="bg-background rounded-t-xl">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h2 className="text-lg font-semibold">파일 업로드</h2>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={onClose}
//               className="rounded-full hover:bg-secondary"
//             >
//               <X className="h-5 w-5" />
//             </Button>
//           </div>

//           <div className="grid grid-cols-3 gap-4 p-6">
//             {options.map((option) => (
//               <button
//                 key={option.id}
//                 onClick={() => {
//                   onOptionSelect(option.id);
//                   onClose();
//                 }}
//                 className="flex flex-col items-center gap-3"
//               >
//                 <div
//                   className={cn(
//                     "h-16 w-16 rounded-full flex items-center justify-center",
//                     "transition-all duration-200",
//                     option.color,
//                     option.hoverColor,
//                     "group",
//                   )}
//                 >
//                   <div className="text-white transition-transform duration-200 group-hover:scale-110">
//                     {option.icon}
//                   </div>
//                 </div>
//                 <span className="text-sm font-medium text-muted-foreground">
//                   {option.label}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
