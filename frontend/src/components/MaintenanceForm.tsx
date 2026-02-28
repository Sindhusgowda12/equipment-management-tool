// // // import React, { useEffect, useState } from 'react';
// // // import { useForm } from 'react-hook-form';
// // // import { zodResolver } from '@hookform/resolvers/zod';
// // // import * as z from 'zod';
// // // import {
// // //   Form,
// // //   FormControl,
// // //   FormField,
// // //   FormItem,
// // //   FormLabel,
// // //   FormMessage,
// // // } from '@/components/ui/form';
// // // import { Input } from '@/components/ui/input';
// // // import { Button } from '@/components/ui/button';
// // // import { toast } from 'sonner';

// // // const formSchema = z.object({
// // //   maintenance_date: z.string().min(1, 'Please select a date'),
// // //   notes: z.string().min(1, 'Please add some notes'),
// // //   performed_by: z.string().min(1, 'Please specify who performed it'),
// // // });

// // // interface MaintenanceFormProps {
// // //   equipmentId: number;
// // //   onSuccess: () => void;
// // //   onCancel: () => void;
// // // }

// // // export function MaintenanceForm({ equipmentId, onSuccess, onCancel }: MaintenanceFormProps) {
// // //   const [loading, setLoading] = useState(false);

// // //   const form = useForm<z.infer<typeof formSchema>>({
// // //     resolver: zodResolver(formSchema),
// // //     defaultValues: {
// // //       maintenance_date: new Date().toISOString().split('T')[0],
// // //       notes: '',
// // //       performed_by: '',
// // //     },
// // //   });

// // //   async function onSubmit(values: z.infer<typeof formSchema>) {
// // //     setLoading(true);
// // //     try {
// // //       const response = await fetch('/api/maintenance', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({
// // //           ...values,
// // //           equipment_id: equipmentId,
// // //         }),
// // //       });

// // //       if (!response.ok) {
// // //         const data = await response.json();
// // //         throw new Error(data.error || 'Failed to log maintenance');
// // //       }

// // //       toast.success('Maintenance logged successfully');
// // //       onSuccess();
// // //     } catch (error: any) {
// // //       toast.error(error.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }

// // //   return (
// // //     <Form {...form}>
// // //       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
// // //         <FormField
// // //           control={form.control}
// // //           name="maintenance_date"
// // //           render={({ field }) => (
// // //             <FormItem>
// // //               <FormLabel>Maintenance Date</FormLabel>
// // //               <FormControl>
// // //                 <Input type="date" {...field} />
// // //               </FormControl>
// // //               <FormMessage />
// // //             </FormItem>
// // //           )}
// // //         />

// // //         <FormField
// // //           control={form.control}
// // //           name="notes"
// // //           render={({ field }) => (
// // //             <FormItem>
// // //               <FormLabel>Notes</FormLabel>
// // //               <FormControl>
// // //                 <Input placeholder="Maintenance details" {...field} />
// // //               </FormControl>
// // //               <FormMessage />
// // //             </FormItem>
// // //           )}
// // //         />

// // //         <FormField
// // //           control={form.control}
// // //           name="performed_by"
// // //           render={({ field }) => (
// // //             <FormItem>
// // //               <FormLabel>Performed By</FormLabel>
// // //               <FormControl>
// // //                 <Input placeholder="Name of technician" {...field} />
// // //               </FormControl>
// // //               <FormMessage />
// // //             </FormItem>
// // //           )}
// // //         />

// // //         <div className="flex justify-end space-x-2 pt-4">
// // //           <Button type="button" variant="outline" onClick={onCancel}>
// // //             Cancel
// // //           </Button>
// // //           <Button type="submit" disabled={loading}>
// // //             {loading ? 'Logging...' : 'Log Maintenance'}
// // //           </Button>
// // //         </div>
// // //       </form>
// // //     </Form>
// // //   );
// // // }
// // import React from 'react';
// // import { useForm } from 'react-hook-form';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import { toast } from 'sonner';

// // export function MaintenanceForm({ equipmentId, onSuccess, onCancel }) {
// //   const { register, handleSubmit } = useForm();

// //   const onSubmit = async (data) => {
// //     try {
// //       const response = await fetch(`http://localhost:8082/api/maintenance`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ ...data, equipmentId }),
// //       });

// //       if (response.ok) {
// //         // Safe check for empty response
// //         const text = await response.text();
// //         const result = text ? JSON.parse(text) : {};
        
// //         toast.success('Maintenance logged! Equipment is now Active.');
// //         onSuccess();
// //       } else {
// //         toast.error('Update failed');
// //       }
// //     } catch (err) {
// //       toast.error('Network error');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //       <div>
// //         <Label>Maintenance Date</Label>
// //         <Input type="date" {...register('maintenanceDate')} required />
// //       </div>
// //       <div>
// //         <Label>Notes</Label>
// //         <Input {...register('notes')} placeholder="Describe work done..." required />
// //       </div>
// //       <div>
// //         <Label>Performed By</Label>
// //         <Input {...register('performedBy')} placeholder="Your name" required />
// //       </div>
// //       <div className="flex justify-end gap-2 pt-4">
// //         <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
// //         <Button type="submit" className="bg-black text-white">Save & Activate</Button>
// //       </div>
// //     </form>
// //   );
// // }
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { toast } from 'sonner';

// export function MaintenanceForm({ equipmentId, onSuccess, onCancel }: any) {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = async (data: any) => {
//     try {
//       const response = await fetch(`http://localhost:8082/api/maintenance`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           equipmentId,
//           maintenanceDate: data.maintenanceDate,
//           notes: data.notes,
//           performedBy: data.performedBy
//         }),
//       });

//       if (response.ok) {
//         toast.success('Maintenance logged! Status is now Active.');
//         onSuccess();
//       } else {
//         toast.error('Failed to log maintenance');
//       }
//     } catch (err) {
//       toast.error('Network error');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <div>
//         <Label>Maintenance Date</Label>
//         <Input type="date" {...register('maintenanceDate')} required />
//       </div>
//       <div>
//         <Label>Notes</Label>
//         <Input {...register('notes')} placeholder="Describe work done" required />
//       </div>
//       <div>
//         <Label>Performed By</Label>
//         <Input {...register('performedBy')} placeholder="Engineer Name" required />
//       </div>
//       <div className="flex justify-end gap-2 pt-4">
//         <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
//         <Button type="submit" className="bg-neutral-900 text-white">Log & Activate</Button>
//       </div>
//     </form>
//   );
// }
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function MaintenanceForm({ equipmentId, onSuccess, onCancel }: any) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`http://localhost:8082/api/maintenance`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          equipmentId,
          maintenanceDate: data.maintenanceDate,
          notes: data.notes,
          performedBy: data.performedBy
        }),
      });

      if (response.ok) {
        // --- CRITICAL FIX START ---
        const text = await response.text();
        // Only parse if there is actually text in the response
        const result = text ? JSON.parse(text) : {}; 
        // --- CRITICAL FIX END ---

        toast.success('Maintenance logged! Equipment is now Active.');
        onSuccess(); // This refreshes the table in App.tsx
      } else {
        const errorText = await response.text();
        toast.error(errorText || 'Failed to log maintenance');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error - check if backend is on 8082');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label>Maintenance Date</Label>
        <Input type="date" {...register('maintenanceDate')} required />
      </div>
      <div>
        <Label>Notes</Label>
        <Input {...register('notes')} placeholder="Describe work done" required />
      </div>
      <div>
        <Label>Performed By</Label>
        <Input {...register('performedBy')} placeholder="Your Name" required />
      </div>
      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit" className="bg-neutral-900 text-white">Log & Activate</Button>
      </div>
    </form>
  );
}